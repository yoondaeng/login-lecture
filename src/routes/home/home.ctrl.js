"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => { 
        // home, login: 해당 페이지를 렌더링해주는 함수
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
    
    register: (req, res) => {
        res.render("home/register");
    },
}

const process = {
     login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },

    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};

// 모듈을 밖으로 내보내기 해야함. 그래야 밖에서 사용가능.
module.exports = {
    output,
    process,
};