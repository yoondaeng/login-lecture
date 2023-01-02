"use strict";


const output = {
    home: (req, res) => { 
        // home, login: 해당 페이지를 렌더링해주는 함수
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["admin", "12201953", "user"],
    password: ["0000", "0000", "0000" ],
};

const process = {
     login: (req, res) => {
        const id = req.body.id,
          password = req.body.password;

        // 아이디와 패스워드 검증
        if (users.id.includes(id)) { // 프론트에서 전달한 id가 users id에 있으면
            const idx = users.id.indexOf(id); // id index를 가져옴
            if (users.password[idx] === password){
                return res.json({ // 프론트에게 로그인 성공 여부를 전달
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패했습니다. ",
        });
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