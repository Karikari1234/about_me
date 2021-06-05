object(Requests_Response)#5 (10) {
  ["body"]=>
  string(51) "{
  "authenticated": true, 
  "user": "someuser"
}
"
  ["raw"]=>
  string(275) "HTTP/1.1 200 OK
Date: Sat, 05 Jun 2021 20:04:22 GMT
Content-Type: application/json
Content-Length: 51
Connection: close
Server: gunicorn/19.9.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

{
  "authenticated": true, 
  "user": "someuser"
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
        string(2) "51"
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
  string(47) "http://httpbin.org/basic-auth/someuser/password"
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