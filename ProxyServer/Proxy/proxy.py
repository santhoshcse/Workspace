# a truly minimal HTTP proxy

import sys
#import os

import socketserver
import http.server
import urllib.request

requestURL = sys.argv[1]

PORT = 1234

class Proxy(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        #print(self.path)
        #print(self.wfile)
        #self.copyfile(urllib.request.urlopen('http://localhost:8000/'), 'response.html')
        with urllib.request.urlopen(requestURL) as url:
            s = url.read()
            print(s)
            #self.wfile.write(s)
            with open('index.html', 'wb') as file:
                file.write(s)
        self.path = '/index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

httpd = socketserver.ThreadingTCPServer(('', PORT), Proxy)
print("serving at port", PORT)
#print(dir(Proxy))
#print(os.path.abspath(sys.modules[Proxy.__module__].__file__))
httpd.serve_forever()
