# coding: utf-8

import http.server
import socketserver

PORT = 8080
Handler = http.server.SimpleHTTPRequestHandler

print("access to http://localhost:8080/index.html")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
