<title>405 Method Not Allowed</title>


<h1>Method Not Allowed</h1>
<p>The method is not allowed for the requested URL.</p>
"
  ["raw"]=>
  string(434) "HTTP/1.1 405 METHOD NOT ALLOWED
Date: Sat, 05 Jun 2021 20:04:23 GMT
Content-Type: text/html
Content-Length: 178
Connection: close
Server: gunicorn/19.9.0
Allow: OPTIONS, POST
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true


<title>405 Method Not Allowed</title>
<h1>Method Not Allowed</h1>
<p>The method is not allowed for the requested URL.</p>
"
  ["headers"]=>
  object(Requests_Response_Headers)#12 (1) {
    ["data":protected]=>
    array(7) {
      ["date"]=>
      array(1) {
        [0]=>
        string(29) "Sat, 05 Jun 2021 20:04:23 GMT"
      }
      ["content-type"]=>
      array(1) {
        [0]=>
        string(9) "text/html"
      }
      ["content-length"]=>
      array(1) {
        [0]=>
        string(3) "178"
      }
      ["server"]=>
      array(1) {
        [0]=>
        string(15) "gunicorn/19.9.0"
      }
      ["allow"]=>
      array(1) {
        [0]=>
        string(13) "OPTIONS, POST"
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
  int(405)
  ["protocol_version"]=>
  float(1.1)
  ["success"]=>
  bool(false)
  ["redirects"]=>
  int(0)
  ["url"]=>
  string(23) "http://httpbin.org/post"
  ["history"]=>
  array(0) {
  }
  ["cookies"]=>
  object(Requests_Cookie_Jar)#4 (1) {
    ["cookies":protected]=>
    array(0) {
    }
  }
}
int(0)
object(Requests_Response)#14 (10) {
  ["body"]=>
  string(360) "{
  "args": {}, 
  "headers": {
    "Accept": "application/javascript", 
    "Accept-Encoding": "deflate, gzip", 
    "Host": "httpbin.org", 
    "Referer": "http://httpbin.org/get", 
    "User-Agent": "php-requests/1.7", 
    "X-Amzn-Trace-Id": "Root=1-60bbd8c7-0c3851965aa96e1552baca98"
  }, 
  "origin": "74.208.56.57", 
  "url": "http://httpbin.org/get"
}
"
  ["raw"]=>
  string(585) "HTTP/1.1 200 OK
Date: Sat, 05 Jun 2021 20:04:23 GMT
Content-Type: application/json
Content-Length: 360
Connection: close
Server: gunicorn/19.9.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

{
  "args": {}, 
  "headers": {
    "Accept": "application/javascript", 
    "Accept-Encoding": "deflate, gzip", 
    "Host": "httpbin.org", 
    "Referer": "http://httpbin.org/get", 
    "User-Agent": "php-requests/1.7", 
    "X-Amzn-Trace-Id": "Root=1-60bbd8c7-0c3851965aa96e1552baca98"
  }, 
  "origin": "74.208.56.57", 
  "url": "http://httpbin.org/get"
}
"
  ["headers"]=>
  object(Requests_Response_Headers)#13 (1) {
    ["data":protected]=>
    array(6) {
      ["date"]=>
      array(1) {
        [0]=>
        string(29) "Sat, 05 Jun 2021 20:04:23 GMT"
      }
      ["content-type"]=>
      array(1) {
        [0]=>
        string(16) "application/json"
      }
      ["content-length"]=>
      array(1) {
        [0]=>
        string(3) "360"
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
string(7) "delayed"
object(Requests_Response)#16 (10) {
  ["body"]=>
  string(397) "{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Accept-Encoding": "deflate, gzip", 
    "Host": "httpbin.org", 
    "Referer": "http://httpbin.org/delay/10", 
    "User-Agent": "php-requests/1.7", 
    "X-Amzn-Trace-Id": "Root=1-60bbd8c7-1bb16d27130e18214052e166"
  }, 
  "origin": "74.208.56.57", 
  "url": "http://httpbin.org/delay/10"
}
"
  ["raw"]=>
  string(622) "HTTP/1.1 200 OK
Date: Sat, 05 Jun 2021 20:04:33 GMT
Content-Type: application/json
Content-Length: 397
Connection: close
Server: gunicorn/19.9.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

{
  "args": {}, 
  "data": "", 
  "files": {}, 
  "form": {}, 
  "headers": {
    "Accept": "*/*", 
    "Accept-Encoding": "deflate, gzip", 
    "Host": "httpbin.org", 
    "Referer": "http://httpbin.org/delay/10", 
    "User-Agent": "php-requests/1.7", 
    "X-Amzn-Trace-Id": "Root=1-60bbd8c7-1bb16d27130e18214052e166"
  }, 
  "origin": "74.208.56.57", 
  "url": "http://httpbin.org/delay/10"
}
"
  ["headers"]=>
  object(Requests_Response_Headers)#15 (1) {
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
        string(3) "397"
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
  string(27) "http://httpbin.org/delay/10"
  ["history"]=>
  array(0) {
  }
  ["cookies"]=>
  object(Requests_Cookie_Jar)#6 (1) {
    ["cookies":protected]=>
    array(0) {
    }
  }
}