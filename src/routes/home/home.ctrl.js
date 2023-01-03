"use strict";

const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

const output = {
    home: (req, res) => { 
        // home, login: 해당 페이지를 렌더링해주는 함수
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
     login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);

        // const id = req.body.id,
        //   password = req.body.password;
    
        // const users = UserStorage.getUsers("id", "password");
        
        // // 아이디와 패스워드 검증
        // const response = {};
        // if (users.id.includes(id)) { // 프론트에서 전달한 id가 users id에 있으면
        //     const idx = users.id.indexOf(id); // id index를 가져옴
        //     if (users.password[idx] === password){
        //         response.success = true;
        //         return res.json();
        //     }
        // }

        // response.success = false;
        // response.msg = "로그인에 실패했습니다. "
        // return res.json();
    },
};

// 모듈을 밖으로 내보내기 해야함. 그래야 밖에서 사용가능.
module.exports = {
    output,
    process,
};