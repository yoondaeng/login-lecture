"use strict";

const app = require("../app");
const PORT = process.env.PORT || 3000; // 등록한 환경변수를 사용

app.listen(PORT, () => { 
    console.log("서버 가동");
});