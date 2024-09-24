import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const Login = () => {
  const inputs = useRef([]);
  const dispatch = useDispatch();
  const nav = useNavigate();

  /**
   * 버튼 클릭 대행 이벤트
   * @param {KeyboardEvent} event
   */
  function enterEffect(event) {
    if(event.key == "Enter") {
      reqSignin();
    }
  }

  /**
   * 로그인 시도
   */
  function reqSignin() {
    if (inputs.current[0]?.value.trim().length > 0 && inputs.current[1]?.value.trim().length > 0) {
      const user = {};
      for (const element of inputs.current) {
        user[element.name] = element.value;
      }
      
      axios.post("http://localhost:9999/auth/signinProc", user, {withCredentials: true})
      .then((res) => {
        dispatch({type: "set", user: res.data});
        nav("/dashboard");
      }).catch((err) => {
        if (err?.status === 401) {
          alert("로그인에 실패했습니다\n잘못된 계정 및 비밀번호입니다");
        }
      });
    } else {
      alert("로그인에 실패했습니다\n잘못된 계정 및 비밀번호입니다");
    }
  }

  /**
   * 카카오로 ~~
   * @todo 사용자 정보에 접근할 뭔가를 받아서 요청 보내기
   */
  function reqSignKakao() {
    const api_key = "b9f133be5346a55f04808ed817f6a6ca";
    const redirect_url = "http://localhost:3000/login";
    const request_url = `https://kauth.kakao.com/oauth/authorize?client_id=${api_key}&redirect_uri=${redirect_url}&response_type=code&state=wellnesspring`;

    window.location.href = request_url;
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm className='mb-4'>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        name='userId'
                        ref={(e) => {inputs.current[0] = (e)}}
                        required
                        onKeyUp={e => enterEffect(e)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name='userPw'
                        placeholder="Password"
                        ref={(e) => {inputs.current[1] = (e)}}
                        required
                        onKeyUp={e => enterEffect(e)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={reqSignin}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                  <CCol style={{display: 'flex', justifyContent: "space-around"}}>
                    <CImage src='https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/5f9c58c2017800001.png'
                      width={'40px'} onClick={reqSignKakao} />
                  </CCol>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
