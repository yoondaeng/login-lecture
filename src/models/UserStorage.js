"use strict";

class UserStorage {
    static #users = {
         id: ["admin", "12201953", "user"],
         password: ["0000", "0000", "0000" ],
         name: ["관리자", "정윤지", "유저"],

    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // users의 키값 ㄷ
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
    }
}

module.exports = UserStorage;