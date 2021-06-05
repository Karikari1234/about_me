object(Requests_Response)#4 (10) {
  ["body"]=>
  string(522) "{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {
    "mydata": "something"
  }, 
  "headers": {
    "Accept": "*/*", 
    "Accept-Encoding": "deflate, gzip", 
    "Content-Length": "16", 
    "Content-Type": "application/x-www-form-urlencoded", 
    "Host": "httpbin.org", 
    "Referer": "http://httpbin.org/post", 
    "User-Agent": "php-requests/1.7", 
    "X-Amzn-Trace-Id": "Root=1-60bbd8d1-0a13e76064ce3faf3b10bf55"
  }, 
  "json": null, 
  "origin": "74.208.56.57", 
  "url": "http://httpbin.org/post"
}
"
  ["raw"]=>
  string(747) "HTTP/1.1 200 OK
Date: Sat, 05 Jun 2021 20:04:33 GMT
Content-Type: application/json
Content-Length: 522
Connection: close
Server: gunicorn/19.9.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {
    "mydata": "something"
  }, 
  "headers": {
    "Accept": "*/*", 
    "Accept-Encoding": "deflate, gzip", 
    "Content-Length": "16", 
    "Content-Type": "application/x-www-form-urlencoded", 
    "Host": "httpbin.org", 
    "Referer": "http://httpbin.org/post", 
    "User-Agent": "php-requests/1.7", 
    "X-Amzn-Trace-Id": "Root=1-60bbd8d1-0a13e76064ce3faf3b10bf55"
  }, 
  "json": null, 
  "origin": "74.208.56.57", 
  "url": "http://httpbin.org/post"
}
"
  ["headers"]=>
  object(Requests_Response_Headers)#5 (1) {
    ["data":protected]=>
    array(6) {
      ["date"]=>
      array(1) {
        [0]=>
        string(29) "Sat, 05 Jun 2021 20:04:33 GMT"
      }
      ["content-type"]=>
      array(1) {
        [0]=>
        string(16) "application/json"
      }
      ["content-length"]=>
      array(1) {
        [0]=>
        string(3) "522"
      }
      ["server"]=>
      array(1) {
        [0]=>
        string(15) "gunicorn/19.9.0"
      }
      ["access-control-allow-origin"]=>
      array(1) {
        [0]=>
        string(1) "*"
      }
      ["access-control-allow-credentials"]=>
      array(1) {
        [0]=>
        string(4) "true"
      }
    }
  }
  ["status_code"]=>
  int(200)
  ["protocol_version"]=>
  float(1.1)
  ["success"]=>
  bool(true)
  ["redirects"]=>
  int(0)
  ["url"]=>
  string(23) "http://httpbin.org/post"
  ["history"]=>
  array(0) {
  }
  ["cookies"]=>
  object(Requests_Cookie_Jar)#2 (1) {
    ["cookies":protected]=>
    array(0) {
    }
  }
}