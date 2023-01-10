"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    // await을 쓰려면 비동기 함수로 변환
    async login(){
        const client = this.body;
        try{
             const {id, password} = await UserStorage.getUserInfo(client.id);

            if (id) {
                if (id === client.id && password === client.pw){ // users 테이블의 id, pw 이름과 같게
                    return { success : true };
                }
                return {success: false, msg: "비밀번호가 틀렸습니다. "};
            }
        return {success: false, msg: "존재하지 않는 아이디입니다. "};
     } catch (err) { 
        return {success: false, err};
    }
}

    async register(){
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) { // 에러
            return { success: false, msg: err};
        }
    }
}

module.exports=User;