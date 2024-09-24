import { CCard, CCardBody, CCol, CImage, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import KakaoImg from "src/images/kakao_login_medium_narrow.png";

function Social() {
  const nav = useNavigate();
  const user = useSelector(store => store.user);
  const dispatcher = useDispatch();

  useEffect(() => {
    // 소셜(카카오) 로그인 동의 후 리다이렉트 된 것인지 확인
    const url_params = new URL(window.location.href).searchParams;
    const code = url_params?.get("code");
    const state = url_params?.get("state");
    const error = url_params?.get("error");
    const error_description = url_params?.get("error_description");
    let reqFnId = 0;
    
    if (error != null && error.length) {
      console.log(error);
      console.log(error_description);
      alert("카카오 간편 로그인 등록이 취소 되었습니다\n" + error_description);
      nav("/users/profile");
    } else if (code != null && code.length && state == "wellnesspring") {
      reqFnId = setTimeout(() => addKakao(code), 500);
    }

    return () => clearTimeout(reqFnId);
  }, []);

  /**
   * 카카오로 로그인하러 보내는 함수
   */
  function kakaoAgree() {
    const api_key = "b9f133be5346a55f04808ed817f6a6ca";
    const redirect_url = "http://localhost:3000/users/profile";
    const request_url = `https://kauth.kakao.com/oauth/authorize?client_id=${api_key}&redirect_uri=${redirect_url}&response_type=code&state=wellnesspring`;

    sessionStorage.setItem("userId", user.userId);
    window.location.href = request_url;
  }
  
  /**
   * 반환된 카카오 인증 코드를 서버에 보내 간편 로그인 등록 절차 수행
   * @param {string} code 카카오에서 보낸 사용자 정보에 접근할 수 있는 인증 코드
   */
  function addKakao(code) {
    const userId = sessionStorage.getItem("userId");

    axios.get("http://localhost:9999/user/kakao?userId=" + userId + "&code=" + code)
    .then(res => {
      dispatcher({type: "set", user: res.data});
      alert("간편 소셜 로그인 등록에 성공했습니다");
      nav("/users/profile");
    }).catch(err => {
      alert("간편 소셜 로그인 등록에 실패했습니다");
      nav("/users/profile");
    });
  }

  return (<>
    <CModalHeader>
      <CModalTitle>소셜 로그인 등록</CModalTitle>
    </CModalHeader>
		<CModalBody>
      {/* 나중에 소셜 로그인 종류가 추가되면 동적으로 만들어야함 */}
        <CCard className="mb-4">
          <CCardBody style={{display: "flex", justifyContent: "space-between"}}>
            <p style={{fontSize: "x-large", margin: "auto 0"}}>Kakao</p>
            <CImage align="end" src={KakaoImg} onClick={kakaoAgree} />
          </CCardBody>
        </CCard>
		</CModalBody>
		<CModalFooter>
			싹 다 구현 필요
		</CModalFooter>
  </>);
}

export default Social;