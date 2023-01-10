"use strict";

const db = require("../config/db");

class UserStorage {
    static getUsers(isAll, ...fields) {

    }

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "select * from users where id = ?;";
            db.query(query, [id], (err, data)=>{
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo){
        return new Promise((resolve, reject) => {
            const query = "insert into users(id, name, pw) values (?, ?, ?);";
            db.query(
                query, 
                [userInfo.id, userInfo.name, userInfo.password], 
                (err)=>{
                if (err) reject(`${err}`);
                resolve({success:true});
            });
        });
    }
}

module.exports = UserStorage;