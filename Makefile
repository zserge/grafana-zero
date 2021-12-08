MPYDIR := .micropython
MPY    := $(MPYDIR)/ports/unix/micropython

TTY ?= /dev/cu.usbserial-0001

local:
	.micropython/ports/unix/micropython g0.py

remote:
	mpremote connect $(TTY) run g0.py

micropython: $(MPY)
$(MPY): $(MPYDIR)
	(cd .micropython/ports/unix; make submodules; make)
$(MPYDIR):
	git clone https://github.com/micropython/micropython .micropython

.PHONY: local remote micropython
