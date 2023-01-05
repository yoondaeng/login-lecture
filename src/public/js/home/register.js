"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  password = document.querySelector("#password"),
  confirmpassword = document.querySelector("#confirm-password"),
  registerBtn= document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
        confirmpassword: confirmpassword.value,

    };

    
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res)=> {
        if (res.success){ // 회원가입 성공하면
            location.href = "/login"; // 로그인 페이지로 이동
        } else {
            alert(res.msg); // 실패하면 메시지 출력
        }
      })
      .catch((err) => {
        console.error("회원가입 중 에러 발생");
      });
}