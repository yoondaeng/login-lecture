"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
     login: (req, res) => {
        console.log(req.body);
     },
};

// 모듈을 밖으로 내보내기 해야함. 그래야 밖에서 사용가능.
module.exports = {
    output,
    process,
};

// const output = {
//     home: (req, res) => {
//         res.render("home/index");
//     },
//     login: (req, res) => {
//         res.render("home/login");
//     },
// };

// const process = {
//     login: (req, res) => {
//         console.log(req.body); 
//         // req: front에서 전달한 요청 데이터를 담아두는 변수
//     },
// };

// module.exports = {
//     output,
//     process,
    
// };