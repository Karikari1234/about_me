object(Requests_Response)#4 (10) {
  ["body"]=>
  string(350) "{
  "args": {}, 
  "headers": {
    "Accept": "application/json", 
    "Accept-Encoding": "deflate, gzip", 
    "Host": "httpbin.org", 
    "Referer": "http://httpbin.org/get", 
    "User-Agent": "Awesomesauce", 
    "X-Amzn-Trace-Id": "Root=1-60bbd8d1-6dc627d87873fc822845ea6a"
  }, 
  "origin": "74.208.56.57", 
  "url": "http://httpbin.org/get"
}
"
  ["raw"]=>
  string(575) "HTTP/1.1 200 OK
Date: Sat, 05 Jun 2021 20:04:33 GMT
Content-Type: application/json
Content-Length: 350
Connection: close
Server: gunicorn/19.9.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

{
  "args": {}, 
  "headers": {
    "Accept": "application/json", 
    "Accept-Encoding": "deflate, gzip", 
    "Host": "httpbin.org", 
    "Referer": "http://httpbin.org/get", 
    "User-Agent": "Awesomesauce", 
    "X-Amzn-Trace-Id": "Root=1-60bbd8d1-6dc627d87873fc822845ea6a"
  }, 
  "origin": "74.208.56.57", 
  "url": "http://httpbin.org/get"
}
"
  ["headers"]=>
  object(Requests_Response_Headers)#6 (1) {
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
        string(3) "350"
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
  string(22) "http://httpbin.org/get"
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
object(Requests_Response)#5 (10) {
  ["body"]=>
  string(35) "{
  "user-agent": "Awesomesauce"
}
"
  ["raw"]=>
  string(259) "HTTP/1.1 200 OK
Date: Sat, 05 Jun 2021 20:04:33 GMT
Content-Type: application/json
Content-Length: 35
Connection: close
Server: gunicorn/19.9.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

{
  "user-agent": "Awesomesauce"
}
"
  ["headers"]=>
  object(Requests_Response_Headers)#7 (1) {
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
        string(2) "35"
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
  string(29) "http://httpbin.org/user-agent"
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