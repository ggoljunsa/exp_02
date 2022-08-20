const express = require("express");
const app = express();

app.use(express.json());

app.post('/', function(req, res){
  console.log(req.body);      // 사용자의 JSON 요청
    res.send(req.body);    // JSON 응답
});

app.listen(3000);
FormData