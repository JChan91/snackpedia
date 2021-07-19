import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/SignIn.css";
import KaKaoLogin from "react-kakao-login";
// import snackMerge from "../images/snack_merge.PNG";

function SignIn() {
  //   useEffect(() => {
  //     axios.post("http://localhost:8000/signin").then((res) => {
  //       set(res.SignIn);
  //     });
  //   }, []);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitdHandler = (event) => {
    event.preventDefault();

    console.log("Email", Email);
    console.log("Password", Password);
  };

  axios({
    method: "POST",
    url: "http://localhost:8000/signin",
    data: {
      Email: Email.value,
      Password: Password.value,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });

  //   responseKaKao = (res) => {
  //     const { data } = this.state;

  //     this.setState({
  //       data: res,
  //     });

  //     fetch(`${API_URL_LOGIN}/user/signin/kakao`, {
  //       //백엔드에서 원하는 형태의 endpoint로 입력해서 fetch한다.
  //       method: "GET",
  //       headers: {
  //         Authorization: res.response.access_token,
  //         //받아오는 response객체의 access_token을 통해 유저 정보를 authorize한다.
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then(
  //         (res) => localStorage.setItem("token", res.token),
  //         //백엔드에서 요구하는 key 값(token)으로 저장해서 localStorage에 저장한다.
  //         //여기서 중요한것은 처음에 console.log(res)해서 들어오는
  //         //access_token 값을 백엔드에 전달해줘서 백엔드에 저장 해두는
  //         //절차가 있으므로 까먹지 말 것!
  //         alert("로그인 성공하였습니다")
  //       );
  //   };

  // const { Kakao } = window;   function SosicalLogin() {     const history =
  // useHistory();     const KakaoLoginClickHandler = () => {
  // Kakao.Auth.login({         success: function (authObj) {
  // fetch(`${KAKAO_LOGIN_API_URL}`, {             method: "POST",
  // body: JSON.stringify({               access_token: authObj.access_token,
  // }),           })             .then((res) => res.json())
  // .then((res) => {               localStorage.setItem("Kakao_token",
  // res.access_token);               if (res.access_token) {
  // alert("SNACKPEDIA에 오신걸 환영합니다:)");                 history.push("/signin");
  // }             });         },         fail: function (err) {
  // alert(JSON.stringify(err));         },       });     };     return (
  // <article className="socialLogin">         <button           fill
  // className="btn kakao"           onClick={KakaoLoginClickHandler}
  // ></button>       </article>     );   }

  return (
    <div className="SignInForm">
      <div>
        <h1 className="signin-text">
          {/* <img src={snackMerge} className="snackMerge-img" /> */}
          Login
        </h1>
        <form onSubmit={onSubmitdHandler} className="signin-form">
          <label className="signin-label">E-mail</label>
          <input
            className="signin-input"
            type="email"
            value={Email}
            onChange={onEmailHandler}
          />

          <label className="signin-label">Password</label>
          <input
            className="signin-input"
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />

          {/* <KaKaoBtn
            //styled component 통해 style을 입혀 줄 예정
            jsKey={"c16c8149a919d4b39808fbdc3913fcc0"}
            //카카오에서 할당받은 jsKey를 입력
            buttonText="카카오 계정으로 로그인"
            //로그인 버튼의 text를 입력
            onSuccess={this.responseKaKao}
            //성공했을때 불러올 함수로서 fetch해서 localStorage에 저장할 함수를 여기로 저장
            getProfile={true}
          /> */}

          <br />
          <button className="signin-button">OK!</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
