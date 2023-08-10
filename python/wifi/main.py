# import mip
# mip.install("urequests")
# mip.install("ujson")

import network, rp2, time
import urequests
import ujson

WIFI_AP_NAME = 'NEO-e-KIWI-EXT2G'
WIFI_AP_PWD = 'N9PAGQES'
SERVER_HOST = 'https://viktor.vvasylkovskyi.com:4443/api/soil-moisture'

wlan = network.WLAN(network.STA_IF)

def setup_network():
    # set your WiFi Country
    rp2.country('PT')

    wlan.active(True)
    # set power mode to get WiFi power-saving off (if needed)
    wlan.config(pm = 0xa11140)
    wlan.connect(WIFI_AP_NAME, WIFI_AP_PWD)

    max_wait = 10
    while max_wait > 0:
        if wlan.status() < 0 or wlan.status() >= 3:
            break
        max_wait -= 1
        print('waiting for connection...')
        time.sleep(1)

    if wlan.status() != 3:
        raise RuntimeError('network connection failed')
    else:
        print('connected')
        status = wlan.ifconfig()
        print( 'ip = ' + status[0])

def reconnect():
    wlan.disconnect()
    wlan.connect(WIFI_AP_NAME, WIFI_AP_PWD)
    if wlan.status() == 3:
        print('connected')
    else:
        print('failed reconnecting')

def run():
    while True:
        try:
            # Reads data and post it to the server
            post_data = ujson.dumps({ 'soilMoisture': '99' })
            res = urequests.post(SERVER_HOST, headers = {'content-type': 'application/json'}, data = post_data)
            print(res.text)
            res.close() # Need to close to avoid memory leak
        except:
            print("could not connect (status =" + str(wlan.status()) + ")")
            reconnect()

        time.sleep(5)

setup_network()
run()