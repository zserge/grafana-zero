try:
    import machine
    import network 
    def connect_wifi():
        wlan = network.WLAN(network.STA_IF)
        wlan.active(True)
        if not wlan.isconnected():
            print('connecting to network...')
            wlan.connect("Korova", "idea-author-coat-effect")
            while not wlan.isconnected():
                pass
        print('network config:', wlan.ifconfig())
    connect_wifi()
except ImportError:
    pass

import json
import socket

def index_html():
    return '''<!DOCTYPE html><html><head><title>Grafana Zero</title><meta name="viewport" content="width=device-width"><link rel="stylesheet" href="https://zserge.com/grafana-zero/public/build/grafana.dark.07a78e2e5dfa22b54847.css"></head><body class="theme-dark"><div id="reactRoot"></div><script>window.grafanaBootData={user:{},settings:{datasources:{"-- Dashboard --":{meta:{id:"dashboard",signature:"internal",builtIn:!0,type:"datasource",info:{},name:"Dashboard",module:"app/plugins/datasource/dashboard/module",metrics:!0},name:"Dashboard",type:"datasource",uid:"dashboard"},"-- Grafana --":{meta:{id:"grafana",signature:"internal",builtIn:!0,type:"datasource",info:{},name:"Grafana",module:"app/plugins/datasource/grafana/module",metrics:!0},name:"Grafana",type:"datasource",uid:"grafana"},"-- Mixed --":{meta:{id:"mixed",signature:"internal",builtIn:!0,type:"datasource",name:"Mixed",module:"app/plugins/datasource/mixed/module",metrics:!0},name:"Mixed",type:"datasource",uid:"mixed"}},panels:{text:{module:"app/plugins/panel/text/module",id:"text",info:{}},timeseries:{module:"app/plugins/panel/timeseries/module",id:"timeseries",info:{}}},defaultDatasource:"-- Grafana --"},navTree:[],themePaths:{light:"https://zserge.com/grafana-zero/public/build/grafana.light.07a78e2e5dfa22b54847.css",dark:"https://zserge.com/grafana-zero/public/build/grafana.dark.07a78e2e5dfa22b54847.css"}},window.public_cdn_path="https://zserge.com/grafana-zero/public/build/";</script><script src="https://zserge.com/grafana-zero/public/build/runtime.07a78e2e5dfa22b54847.js"></script><script src="https://zserge.com/grafana-zero/public/build/4808.07a78e2e5dfa22b54847.js"></script><script src="https://zserge.com/grafana-zero/public/build/4850.07a78e2e5dfa22b54847.js"></script><script src="https://zserge.com/grafana-zero/public/build/2689.07a78e2e5dfa22b54847.js"></script><script src="https://zserge.com/grafana-zero/public/build/9309.07a78e2e5dfa22b54847.js"></script><script src="https://zserge.com/grafana-zero/public/build/1609.07a78e2e5dfa22b54847.js"></script><script src="https://zserge.com/grafana-zero/public/build/app.07a78e2e5dfa22b54847.js"></script></body></html>'''

def panel(index, title, timeseries):
    return '''{"datasource":{"type":"grafana","uid":"grafana"},"fieldConfig":{"defaults":{"color":{"mode":"palette-classic"},"custom":{"axisLabel":"","axisPlacement":"auto","barAlignment":0,"drawStyle":"line","fillOpacity":0,"gradientMode":"none","hideFrom":{"legend":false,"tooltip":false,"viz":false},"lineInterpolation":"linear","lineWidth":1,"pointSize":5,"scaleDistribution":{"type":"linear"},"showPoints":"auto","spanNulls":false,"stacking":{"group":%s,"mode":"none"},"thresholdsStyle":{"mode":"off"}},"mappings":[],"thresholds":{"mode":"absolute","steps":[{"color":"green","value":null},{"color":"red","value":80}]}},"overrides":[]},"gridPos":{"h":8,"w":24,"x":0,"y":%d},"id":%d,"options":{"legend":{"calcs":[],"displayMode":"list","placement":"bottom"},"tooltip":{"mode":"single"}},"targets":[{"datasource":{"type":"datasource","uid":"grafana"},"refId":%s}],"title":%s,"type":"timeseries"}''' % (json.dumps(timeseries), index*8, index+1, json.dumps(timeseries), json.dumps(title))

def text(index, title, markdown):
    return '''{"editable":true,"gridPos":{"h":8,"w":24,"x":0,"y":%d},"id":%d,"options":{"content":%s,"mode":"markdown"},"pluginVersion":"v1.0","style":{},"title":%s,"type":"text"}''' % (index*8, index+1, json.dumps(markdown), json.dumps(title))

def home_dashboard(*argv):
    return '''{"meta":{"canSave":false,"canEdit":false},"dashboard":{"annotations":{"list":[{"builtIn":1,"datasource":"-- Grafana --","enable":true,"hide":true,"iconColor":"rgba(0, 211, 255, 1)","name":"Annotations & Alerts","target":{"limit":100,"matchAny":false,"tags":[],"type":"dashboard"},"type":"dashboard"}]},"editable":true,"fiscalYearStartMonth":0,"graphTooltip":0,"links":[],"liveNow":false,"panels":[%s],"refresh":"","schemaVersion":33,"style":"dark","tags":[],"templating":{"list":[]},"time":{"from":"now-6h","to":"now"},"timepicker":{"collapse":false,"enable":true,"now":true,"refresh_intervals":["5s","10s","30s","1m","5m","15m","30m","1h","2h","1d"],"status":"Stable","time_options":["5m","15m","1h","6h","12h","24h","2d","7d","30d"],"type":"timepicker"},"timezone":"browser","title":"Grafana","version":5,"weekStart":""}}''' % ','.join(argv)

class Request:
    max_content_length = 4096
    def __init__(self, method, url, headers, body):
        self.method = method
        self.path = url
        self.query = None
        if '?' in self.path:
            self.path, self.query = self.path.split('?', 1)
        self.headers = headers
        self.content_length = 0
        for header, value in self.headers.items():
            if header == 'Content-Length':
                self.content_length = int(value)
        self.body = body
    @staticmethod
    def create(stream):
        line = stream.readline().strip().decode()
        if not line: return None
        method, url, http_version = line.split()
        headers = {}
        content_length = 0
        while True:
            line = stream.readline().strip().decode()
            if line == '': break
            header, value = line.split(':', 1)
            value = value.strip()
            headers[header] = value
            if header == 'Content-Length':
                content_length = int(value)
        body = b''
        if content_length and content_length <= Request.max_content_length:
            while len(body) < content_length:
                data = stream.read(content_length - len(body))
                if len(data) == 0: raise EOFError()
                body += data
        return Request(method, url, headers, body)

class Response():
    max_read_size = 1024
    def __init__(self, body = '', status = '200 OK', headers = {}):
        self.status = status
        self.headers = headers
        self.body = body
    def complete(self):
        if isinstance(self.body, bytes) and 'Content-Length' not in self.headers:
            self.headers['Content-Length'] = str(len(self.body))
        if 'Content-Type' not in self.headers:
            self.headers['Content-Type'] = 'text/plain'
        if 'Connection' not in self.headers:
            self.headers['Connection'] = 'close'
    def write(self, stream):
        self.complete()
        stream.write('HTTP/1.1 ' + self.status + '\r\n')
        for header, value in self.headers.items():
            values = value if isinstance(value, list) else [value]
            for value in values:
                stream.write(header + ': ' + value + '\r\n')
        stream.write('\r\n')
        if self.body:
            if hasattr(self.body, 'read'):
                while True:
                    buf = self.body.read(max_read_size)
                    if len(buf): stream.write(buf)
                    if len(buf) < max_read_size: break
            else:
                stream.write(self.body)
    @classmethod
    def redirect(cls, location, status = '302 Found'):
        return cls(status=status, headers={'Location': location})
    @classmethod
    def html(cls, html):
        return cls(body=html, headers={'Content-Type': 'text/html'})
    @classmethod
    def json(cls, json):
        return cls(body=json, headers={'Content-Type': 'application/json'})
    @classmethod
    def notfound(cls):
        return cls(status = '404 Not Found')

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
ai = socket.getaddrinfo("0.0.0.0", 3333)
addr = ai[0][-1]
s.bind(addr)
s.listen(5)

dashboard = home_dashboard(
        text(0, 'Hello, ESP32', 'This is the sample Grafana dashboard served by ESP32 using Grafana Zero backend!'),
        panel(1, 'Voltage', 'V'),
        panel(2, 'Temperature', 'T'),
)

def tsdb(key, n):
    if key == 'V':
        return n%42
    elif key == 'T':
        return 10 if (n % 123) > 64 else 0
    else:
        return 0

def timestamps(start, end, interval):
    ts = []
    t = start
    while t < end:
        ts.append(t*1000)
        t = t + interval
    return ts

def values(key, start, end, interval):
    return [tsdb(key, n) for n in range(start, end, interval)]

print('Running server')
while True:
    conn, addr = s.accept()
    req = Request.create(conn)
    if not req:
        conn.close()
        continue
    print('%s %s' % (req.method, req.path))
    if req.method == 'GET' and req.path == '/':
        index = index_html()
        Response.html(index).write(conn)
    elif req.method == 'GET' and req.path.find('/public/') == 0:
        Response.redirect('https://zserge.com/grafana-zero'+req.path).write(conn)
    elif req.method == 'GET' and req.path == '/api/dashboards/home':
        Response.json(dashboard).write(conn)
    elif req.method == 'POST' and req.path == '/api/ds/query':
        query = json.loads(req.body)
        key = query['queries'][0]['refId']
        print('%f %f' % (float(query['from']), float(query['to'])))
        f = int(float(query['from'])/1000)
        t = int(float(query['to'])/1000)
        schema = {
                'refId': key,
                'fields': [
                    {
                        'name': "time",
                        'type': "time",
                        'typeInfo': { 'frame': "time.Time", 'nullable': True }
                    },
                    {
                        'name': key,
                        'type': "number",
                        'typeInfo': { 'frame': "float64", 'nullable': True },
                        'labels': {}
                        }
                    ]
        }
        res = {
            'results': {
                key: {
                    "frames": [
                        {
                            'schema': schema,
                            'data': {
                                'values': [
                                    timestamps(f, t, 120),
                                    values(key, f, t, 120),
                                ]
                            }
                        }
                    ]
                }
            }
        }
        print('query: %s' % query)
        print('query: %d %d %d' % (f, t, t-f))
        print('res: %s' % res)
        Response.json(json.dumps(res)).write(conn)
    elif req.method == 'GET' and req.path.find('/api/search') == 0:
        Response.json('[]').write(conn)
    elif req.method == 'GET' and req.path.find('/api/') == 0:
        Response.json('{}').write(conn)
    else:
        Response.notfound().write(conn)
    conn.close()
