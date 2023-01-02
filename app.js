"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 정적 경로 추가 디렉토리 네임은 app.js 파일이 있는 위치 안에 있는 퍼블릭을 정적 경로로 추가
app.use(express.static(`${__dirname}/src/public`));

// bodyParser를 사용할 때 미들 웨어를 등록해줘야함
app.use(bodyParser.json());
// URL를 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결을 위한 코드
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home); // us: 미들 웨어를 등록해주는 메서드

// Cannot GET / 서버로 들어오기는 했는데 루트 경로를 찾을 수 없음

module.exports = app;