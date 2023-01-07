"use strict";

const fs = require("fs").promises; // fs를 이용하여 해당 파일에 접근

class UserStorage {
    // private 은닉화
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // users의 키값들만 리스트로 가져옴 => [id, password, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        return fs
          .readFile("./src/databases/users.json")
          .then((data)=>{
            return this.#getUserInfo(data, id);
          })
          .catch(console.error);
    }

    static save(userInfo){
        users.id.push(userInfo.id);
        users.password.push(userInfo.password);
        users.name.push(userInfo.name);
        return { success: true};
    }
}

module.exports = UserStorage;