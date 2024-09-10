import React, { useEffect, useRef, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBirthdayCake, cilLockLocked, cilPhone, cilUser } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  /**
   * @param {HTMLInputElement[]} inputs
   */
  const inputs = useRef([document.createElement("input")]);
  const nav = useNavigate();
  const [validated, setValidated] = useState(false);
  
  useEffect(() => {

  });

  /**
   * 개발용 input 요소 값 로깅
   * @param {HTMLInputElement} element 
   */
  function logging(element) {
    console.log(element.validity);
  }

  /**
   * 비밀번호, 비밀번호 확인 실시간 검사 효과
   * @param {HTMLInputElement} element 
  */
  function passwordCheck(element) {
    if(element.name) {  // 비밀번호
      // 비밀번호 유효성 검사
      // 여기에 정규식 넣으면 됨
      let check = element.value.length > 10;
      switchValid(element, check);
    } else {  // 비밀번호 확인
      let check = element.value === inputs.current[1].value;
      switchValid(element, check);
    }
    
    /**
     * @param {HTMLInputElement} element 
     * @param {boolean} bool 
     */
    function switchValid(element, bool) {
      if(!element.value.length) { // 입력된 값이 없으면
        element.classList.add('is-invalid');
      } else if(bool) {  // 입력된 값이 있으면서 유효하면
        element.classList.remove('is-invalid');
        element.classList.add('is-valid');
        element.setCustomValidity('');
      } else {  // 입력된 값이 있으면서 유효하지 않으면
        element.classList.remove('is-valid');
        element.classList.add('is-invalid');
        element.setCustomValidity('invalid');
      }
    }
  }
  
  function reqSignin(event) {
    event.preventDefault();
    const form = event.currentTarget
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      setValidated(false);
      let user = {};

      for (const element of inputs.current) {
        switch(element.name) {
          case 'birth':
            user = {...user, "serialNumF": element.value.split("-").join("").substring(2).concat(element.value.substring(0,2) < 20 ? 1 : 3)};
            break;
          case 'gender':
            const gender = element.value == "M" ? 0 : 1;
            if(element.checked) {
              user = {...user, "serialNumF": user.serialNumF.substring(0, 6) + (Number(user.serialNumF.substring(6)) + gender)};
            }
            break;
          default:
            user = {...user, [element.name]: element.value};
        }
      }
      
      // 회원가입 요청 보내기
      axios.post("http://localhost:9999/auth/signup", user)
      .then(res => {
        alert("회원가입에 성공했습니다");
        nav("/login");
      }).catch(err => {
        alert("회원가입에 실패했습니다");
        console.log(err);
      })
    }
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm className="needs-validation" validated={validated} onSubmit={reqSignin} noValidate >
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      type='email'
                      ref={e => {inputs.current[0] = e}}
                      name='userId'
                      placeholder="Email"
                      feedbackInvalid="올바른 이메일이 아닙니다"
                      pattern='^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-_]+\.[a-zA-Z]{2,}$'
                      required
                      tooltipFeedback
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                      <CFormInput
                        type="password"
                        ref={e => {inputs.current[1] = e}}
                        name='userPw'
                        className='form-control'
                        placeholder="Password"
                        feedbackInvalid="여기다가 비밀번호 조건 적어야 함"
                        required
                        tooltipFeedback
                        onInput={e => passwordCheck(e.target)}
                      />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      feedbackInvalid="비밀번호가 일치하지 않습니다"
                      required
                      tooltipFeedback
                      onInput={e => passwordCheck(e.target)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      ref={e => inputs.current[2] = e}
                      name='name'
                      placeholder="Name"
                      feedbackInvalid="이름을 입력해주세요"
                      minLength={2}
                      required
                      tooltipFeedback
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilPhone} />
                    </CInputGroupText>
                    <CFormInput
                      ref={e => inputs.current[3] = e}
                      name='phone'
                      placeholder="Phone"
                      maxLength={13}
                      required
                      tooltipFeedback
                      // onInput={e => logging(e.target)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilBirthdayCake} />
                    </CInputGroupText>
                    <CInputGroupText>Birthday</CInputGroupText>
                    <CFormInput
                      type='date'
                      ref={e => inputs.current[4] = e}
                      name='birth'
                      placeholder="Birthday"
                      defaultValue={"2000-01-01"}
                      required
                      tooltipFeedback
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CInputGroupText>Gender</CInputGroupText>
                    {/* 위, 아래 둘 중 하나 골라야 함 */}
                    <CFormInput placeholder='Gender' disabled></CFormInput>
                    <CInputGroupText>
                      <CFormCheck
                        type='radio'
                        ref={e => inputs.current[5] = e}
                        id='gender1'
                        name='gender'
                        label={"Male"}
                        value={'M'}
                        inline
                        feedbackInvalid="성별을 선택해주세요"
                        required
                        tooltipFeedback
                      />
                      <CFormCheck
                        type='radio'
                        ref={e => inputs.current[6] = e}
                        id='gender2'
                        name='gender'
                        label={"Female"}
                        value={'F'}
                        inline
                        required
                        tooltipFeedback
                      />
                    </CInputGroupText>
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type='submit' color="success">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
