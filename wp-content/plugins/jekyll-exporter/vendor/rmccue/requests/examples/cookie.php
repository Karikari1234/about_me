object(Requests_Response)#5 (10) {
  ["body"]=>
  string(52) "{
  "cookies": {
    "login_uid": "something"
  }
}
"
  ["raw"]=>
  string(276) "HTTP/1.1 200 OK
Date: Sat, 05 Jun 2021 20:04:22 GMT
Content-Type: application/json
Content-Length: 52
Connection: close
Server: gunicorn/19.9.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

{
  "cookies": {
    "login_uid": "something"
  }
}
"
  ["headers"]=>
  object(Requests_Response_Headers)#6 (1) {
    ["data":protected]=>
    array(6) {
      ["date"]=>
      array(1) {
        [0]=>
        string(29) "Sat, 05 Jun 2021 20:04:22 GMT"
      }
      ["content-type"]=>
      array(1) {
        [0]=>
        string(16) "application/json"
      }
      ["content-length"]=>
      array(1) {
        [0]=>
        string(2) "52"
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
  string(26) "http://httpbin.org/cookies"
  ["history"]=>
  array(0) {
  }
  ["cookies"]=>
  object(Requests_Cookie_Jar)#3 (1) {
    ["cookies":protected]=>
    array(0) {
    }
  }
}