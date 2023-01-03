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
    
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res)=> {
        if (res.success){ // 로그인 성공하면
            location.href = "/"; // 루트로 이동
        } else {
            alert(res.msg); // 실패하면 메시지 출력
        }
      })
      .catch((err) => {
        console.error("로그인 중 에러 발생");
      });
}