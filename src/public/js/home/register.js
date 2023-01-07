"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  password = document.querySelector("#password"),
  confirmpassword = document.querySelector("#confirm-password"),
  registerBtn= document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력해주십시오. ");
    if (password.value !== confirmpassword.value) 
        return alert("비밀번호가 일치하지 않습니다. ");

    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
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