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
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

app.use("/", home); // us: 미들 웨어를 등록해주는 메서드

// Cannot GET / 서버로 들어오기는 했는데 루트 경로를 찾을 수 없음

module.exports = app;