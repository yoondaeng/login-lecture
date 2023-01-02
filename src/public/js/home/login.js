"use strict";

const id = document.querySelector("#id"),
  password = document.querySelector("#password"),
  loginBtn= document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    };
    // console.log(req);
    // console.log(JSON.stringify(req)); // 문자열로 감싸져있음
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
}