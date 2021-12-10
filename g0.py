import json
import socket
import gc


def ntp(host="pool.ntp.org"):
    """A simple NTP (RFC 5905) client to synchronise local time"""
    NTP_DELTA = 2208988800
    NTP_QUERY = bytearray(48)
    NTP_QUERY[0] = 0x1B
    addr = socket.getaddrinfo(host, 123)[0][-1]
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.settimeout(1)
        res = s.sendto(NTP_QUERY, addr)
        msg = s.recv(48)
    finally:
        s.close()
    t = msg[40] * 0x1000000 + msg[41] * 0x10000 + msg[42] * 0x100 + msg[43]
    return t - NTP_DELTA


try:
    import machine
    import network
    from machine import Timer

    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    if not wlan.isconnected():
        print("connecting to network...")
        wlan.connect("XXX", "YYY")
        while not wlan.isconnected():
            pass
    print("network config:", wlan.ifconfig())

    uptime = 0
    while True:
        try:
            print("Sync NTP")
            uptime = ntp()
            break
        except:
            continue

    def tick(x):
        global uptime
        global rssi
        uptime = uptime + 1
        rssi.add(uptime, wlan.status("rssi"))

    tim1 = Timer(1)
    tim1.init(period=1000, mode=Timer.PERIODIC, callback=tick)

    def now():
        return uptime

except ImportError:
    import time

    def now():
        return time.time()


index_html = """<!DOCTYPE html><html><head><title>Grafana Zero</title><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="https://zserge.com/grafana-zero/public/build/grafana.dark.07a78e2e5dfa22b54847.css"></head><body class="theme-dark"><div id="reactRoot"></div><script>window.grafanaBootData={user:{},settings:{datasources:{"-- Dashboard --":{meta:{id:"dashboard",signature:"internal",builtIn:!0,type:"datasource",info:{},name:"Dashboard",module:"app/plugins/datasource/dashboard/module",metrics:!0},name:"Dashboard",type:"datasource",uid:"dashboard"},"-- Grafana --":{meta:{id:"grafana",signature:"internal",builtIn:!0,type:"datasource",info:{},name:"Grafana",module:"app/plugins/datasource/grafana/module",metrics:!0},name:"Grafana",type:"datasource",uid:"grafana"},"-- Mixed --":{meta:{id:"mixed",signature:"internal",builtIn:!0,type:"datasource",name:"Mixed",module:"app/plugins/datasource/mixed/module",metrics:!0},name:"Mixed",type:"datasource",uid:"mixed"}},panels:{text:{module:"app/plugins/panel/text/module",id:"text",info:{}},timeseries:{module:"app/plugins/panel/timeseries/module",id:"timeseries",info:{}}},defaultDatasource:"-- Grafana --"},navTree:[],themePaths:{light:"https://zserge.com/grafana-zero/public/build/grafana.light.07a78e2e5dfa22b54847.css",dark:"https://zserge.com/grafana-zero/public/build/grafana.dark.07a78e2e5dfa22b54847.css"}},window.public_cdn_path="https://zserge.com/grafana-zero/public/build/";</script><script src="https://zserge.com/grafana-zero/public/build/runtime.07a78e2e5dfa22b54847.js"></script><script src="https://zserge.com/grafana-zero/public/build/4808.07a78e2e5dfa22b54847.js"></script><script src="https://zserge.com/grafana-zero/public/build/4850.07a78e2e5dfa22b54847.js"></script><script src="https://zserge.com/grafana-zero/public/build/2689.07a78e2e5dfa22b54847.js"></script><script src="https://zserge.com/grafana-zero/public/build/9309.07a78e2e5dfa22b54847.js"></script><script src="https://zserge.com/grafana-zero/public/build/1609.07a78e2e5dfa22b54847.js"></script><script src="https://zserge.com/grafana-zero/public/build/app.07a78e2e5dfa22b54847.js"></script></body></html>"""


class Request:
    max_content_length = 4096

    def __init__(self, method, url, headers, body):
        self.method = method
        self.path = url
        self.query = None
        if "?" in self.path:
            self.path, self.query = self.path.split("?", 1)
        self.headers = headers
        self.content_length = 0
        for header, value in self.headers.items():
            if header == "Content-Length":
                self.content_length = int(value)
        self.body = body

    @staticmethod
    def create(stream):
        line = stream.readline().strip().decode()
        if not line:
            return None
        method, url, http_version = line.split()
        headers = {}
        content_length = 0
        while True:
            line = stream.readline().strip().decode()
            if line == "":
                break
            header, value = line.split(":", 1)
            value = value.strip()
            headers[header] = value
            if header == "Content-Length":
                content_length = int(value)
        body = b""
        if content_length and content_length <= Request.max_content_length:
            while len(body) < content_length:
                data = stream.read(content_length - len(body))
                if len(data) == 0:
                    raise EOFError()
                body += data
        return Request(method, url, headers, body)


class Response:
    max_read_size = 1024

    def __init__(self, body="", status="200 OK", headers={}):
        self.status = status
        self.headers = headers
        self.body = body

    def complete(self):
        if isinstance(self.body, bytes) and "Content-Length" not in self.headers:
            self.headers["Content-Length"] = str(len(self.body))
        if "Content-Type" not in self.headers:
            self.headers["Content-Type"] = "text/plain"
        if "Connection" not in self.headers:
            self.headers["Connection"] = "close"

    def write(self, stream):
        self.complete()
        stream.write("HTTP/1.1 " + self.status + "\r\n")
        for header, value in self.headers.items():
            values = value if isinstance(value, list) else [value]
            for value in values:
                stream.write(header + ": " + value + "\r\n")
        stream.write("\r\n")
        if self.body:
            if hasattr(self.body, "read"):
                while True:
                    buf = self.body.read(max_read_size)
                    if len(buf):
                        stream.write(buf)
                    if len(buf) < max_read_size:
                        break
            else:
                stream.write(self.body)

    @classmethod
    def redirect(cls, location, status="302 Found"):
        return cls(status=status, headers={"Location": location})

    @classmethod
    def html(cls, html):
        return cls(body=html, headers={"Content-Type": "text/html"})

    @classmethod
    def json(cls, json):
        return cls(body=json, headers={"Content-Type": "application/json"})

    @classmethod
    def notfound(cls):
        return cls(status="404 Not Found")


class VarInts:
    def __init__(self):
        self.data = bytearray()

    def append(self, x):
        x = (x >> 31) ^ (x << 1)
        while True:
            b = x & 0x7F
            x >>= 7
            if x:
                self.data.append(b | 0x80)
            else:
                self.data.append(b)
                break

    def read(self):
        i = 0
        while i < len(self.data):
            shift = 0
            n = 0
            while True:
                x = self.data[i]
                i = i + 1
                n |= (x & 0x7F) << shift
                shift += 7
                if not (x & 0x80):
                    break
            n = (n >> 1) ^ -(n & 1)
            yield n


class TimeSeries:
    def __init__(self, name):
        self.name = name
        self.last_t = 0
        self.last_x = 0
        self.data = VarInts()

    def add(self, timestamp, value):
        t = int(timestamp)
        x = int(value)
        self.data.append(t - self.last_t)
        self.last_t = t
        self.data.append(x - self.last_x)
        self.last_x = x

    def iterate(self):
        it = self.data.read()
        last_t = 0
        last_x = 0
        while True:
            try:
                t = next(it)
                x = next(it)
                last_t = t + last_t
                yield last_t
                last_x = x + last_x
                yield last_x
            except StopIteration:
                break

    def timestamps(self, start, end, interval):
        t = start
        while t < end:
            yield (t * 1000)
            t = t + interval

    def values(self, start, end, interval):
        t = start
        it = self.iterate()
        timestamp = -1
        value = 0
        while t < end:
            while timestamp < t:
                timestamp = next(it, t)
                value = next(it, 0)
            yield value
            t = t + interval


class FakeTimeSeries:
    def __init__(self, name, f):
        self.name = name
        self.f = f

    def add(self, t, x):
        pass

    def timestamps(self, start, end, interval):
        t = start
        while t < end:
            yield (t * 1000)
            t = t + interval

    def values(self, start, end, interval):
        t = start
        while t < end:
            yield self.f(t)
            t = t + interval


class Grafana:
    def __init__(self):
        self.timeseries = {}
        self.panels = []
        self.id = 0
        self.dashboard = self.home_dashboard()

    def add_metric(self, title, timeseries):
        """Add a time series metric to Grafana home dashboard"""
        panel = '{"datasource":{"type":"grafana","uid":"grafana"},"fieldConfig":{"defaults":{"color":{"mode":"palette-classic"},"custom":{"axisLabel":"","axisPlacement":"auto","barAlignment":0,"drawStyle":"line","fillOpacity":0,"gradientMode":"none","hideFrom":{"legend":false,"tooltip":false,"viz":false},"lineInterpolation":"linear","lineWidth":1,"pointSize":5,"scaleDistribution":{"type":"linear"},"showPoints":"auto","spanNulls":false,"stacking":{"group":%s,"mode":"none"},"thresholdsStyle":{"mode":"off"}},"mappings":[],"thresholds":{"mode":"absolute","steps":[{"color":"green","value":null},{"color":"red","value":80}]}},"overrides":[]},"gridPos":{"h":8,"w":24,"x":0,"y":%d},"id":%d,"options":{"legend":{"calcs":[],"displayMode":"list","placement":"bottom"},"tooltip":{"mode":"single"}},"targets":[{"datasource":{"type":"datasource","uid":"grafana"},"refId":%s}],"title":%s,"type":"timeseries"}' % (
            json.dumps(timeseries.name),
            self.id * 8,
            self.id,
            json.dumps(timeseries.name),
            json.dumps(title),
        )
        self.timeseries[timeseries.name] = timeseries
        self.panels.append(panel)
        self.dashboard = self.home_dashboard()

    def add_text_panel(self, title="", markdown=""):
        """Add markdown text panel to Grafana home dashboard"""
        self.id = self.id + 1
        panel = '{"editable":true,"gridPos":{"h":8,"w":24,"x":0,"y":%d},"id":%d,"options":{"content":%s,"mode":"markdown"},"pluginVersion":"v1.0","style":{},"title":%s,"type":"text"}' % (
            self.id * 8,
            self.id,
            json.dumps(markdown),
            json.dumps(title),
        )
        self.panels.append(panel)
        self.dashboard = self.home_dashboard()

    def home_dashboard(self):
        return (
            '{"meta":{"canSave":false,"canEdit":false},"dashboard":{"annotations":{"list":[{"builtIn":1,"datasource":"-- Grafana --","enable":true,"hide":true,"iconColor":"rgba(0, 211, 255, 1)","name":"Annotations & Alerts","target":{"limit":100,"matchAny":false,"tags":[],"type":"dashboard"},"type":"dashboard"}]},"editable":true,"fiscalYearStartMonth":0,"graphTooltip":0,"links":[],"liveNow":false,"panels":[%s],"refresh":"","schemaVersion":33,"style":"dark","tags":[],"templating":{"list":[]},"time":{"from":"now-6h","to":"now"},"timepicker":{"collapse":false,"enable":true,"now":true,"refresh_intervals":["5s","10s","30s","1m","5m","15m","30m","1h","2h","1d"],"status":"Stable","time_options":["5m","15m","1h","6h","12h","24h","2d","7d","30d"],"type":"timepicker"},"timezone":"browser","title":"Grafana","version":5,"weekStart":""}}'
            % ",".join(self.panels)
        )

    def run(self, port=80):
        """Run Grafana Zero server on a given port"""
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        ai = socket.getaddrinfo("0.0.0.0", port)
        addr = ai[0][-1]
        s.bind(addr)
        s.listen(5)
        print("Running server on port %d" % port)
        while True:
            gc.collect()
            print("memory", gc.mem_free())
            conn, addr = s.accept()
            req = Request.create(conn)
            if not req:
                conn.close()
                continue
            try:
                res = self.handle(req)
                res.write(conn)
            except Exception as e:
                print("write error: %s" % e)
            finally:
                conn.close()

    def handle(self, req):
        print("%d %s %s" % (now(), req.method, req.path))
        if req.method == "GET" and req.path == "/":
            return Response.html(index_html)
        elif req.method == "GET" and req.path.find("/favicon.ico") == 0:
            return Response.redirect("https://grafana.com/favicon.ico")
        elif req.method == "GET" and req.path.find("/public/") == 0:
            return Response.redirect("https://zserge.com/grafana-zero" + req.path)
        elif req.method == "GET" and req.path == "/api/dashboards/home":
            return Response.json(self.dashboard)
        elif req.method == "POST" and req.path == "/api/ds/query":
            return self.query(req)
        elif req.method == "GET" and req.path.find("/api/search") == 0:
            return Response.json("[]")
        elif req.method == "GET" and req.path.find("/api/") == 0:
            return Response.json("{}")
        return Response.notfound()

    def query(self, req):
        query = json.loads(req.body)
        print("Query: %s" % query)
        key = query["queries"][0]["refId"]
        if not key in self.timeseries:
            return Response.json("{}")
        ts = self.timeseries[key]
        f = int(query["from"][0:-3])
        t = int(query["to"][0:-3])
        i = float(query["queries"][0]["intervalMs"]) / 1000
        if i < 1:
            i = 1
        n = float(query["queries"][0]["maxDataPoints"])
        print("%d %d %d %d %d" % (f, t, t - f, i, n))
        schema = {
            "refId": key,
            "fields": [
                {
                    "name": "time",
                    "type": "time",
                    "typeInfo": {"frame": "time.Time", "nullable": True},
                },
                {
                    "name": key,
                    "type": "number",
                    "typeInfo": {"frame": "float64", "nullable": True},
                    "labels": {},
                },
            ],
        }
        res = {
            "results": {
                key: {
                    "frames": [
                        {
                            "schema": schema,
                            "data": {
                                "values": [
                                    [t for t in ts.timestamps(f, t, i)],
                                    [v for v in ts.values(f, t, i)],
                                ]
                            },
                        }
                    ]
                }
            }
        }
        print(res)
        return Response.json(json.dumps(res))


g = Grafana()
markdown = """
# Grafana Zero
This is the sample Grafana dashboard served by ESP32 using **Grafana Zero** firmware.

The microcontrolles is the backend and the TSDB, no other web servers are required.
"""

v = FakeTimeSeries("V", lambda t: t % 42)
rssi = TimeSeries("T")

g.add_text_panel("Hello, ESP32!", markdown)
g.add_metric("Voltage", v)
g.add_metric("WiFi RSSI", rssi)
g.run(3333)
