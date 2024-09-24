import { cilBirthdayCake, cilLockLocked, cilPhone, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton, CCard, CCardBody, CCol, CForm, CFormCheck, CFormInput, CInputGroup, CInputGroupText, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from "@coreui/react";

function EditProfile() {
  return (<>
    <CModalHeader>
      <CModalTitle>프로필</CModalTitle>
    </CModalHeader>
		<CModalBody>
			<CRow className="justify-content-center">
				<CCard className="mx-4 col-md-9">
					<CCardBody className="p-4">
						<CForm className="needs-validation" noValidate >
							<CInputGroup className="mb-3">
								<CInputGroupText>@</CInputGroupText>
								<CFormInput
									type='email'
									// ref={e => {inputs.current[0] = e}}
									name='userId'
									placeholder="Email"
									feedbackInvalid="올바른 이메일이 아닙니다"
									pattern='^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-_]+\.[a-zA-Z]{2,}$'
									required
									tooltipFeedback
									// onChange={e => switchValidId(e.target)}
								/>
								<CButton type='button' color='secondary' variant='outline'>Check</CButton>
							</CInputGroup>
							<CInputGroup className="mb-3">
								<CInputGroupText>
									<CIcon icon={cilLockLocked} />
								</CInputGroupText>
									<CFormInput
										type="password"
										// ref={e => {inputs.current[1] = e}}
										name='userPw'
										className='form-control'
										placeholder="Password"
										feedbackInvalid="여기다가 비밀번호 조건 적어야 함"
										pattern='^[A-Za-z\d!@#$%*]{9,20}$'
										minLength={9}
										maxLength={20}
										required
										tooltipFeedback
										// onInput={e => passwordCheck(e.target)}
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
									// onInput={e => passwordCheck(e.target)}
								/>
							</CInputGroup>
							<CInputGroup className="mb-3">
								<CInputGroupText>
									<CIcon icon={cilUser} />
								</CInputGroupText>
								<CFormInput
									// ref={e => inputs.current[2] = e}
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
									// ref={e => inputs.current[3] = e}
									name='phone'
									placeholder="Phone"
									maxLength={13}
									required
									tooltipFeedback
									// onChange={e => phoneNumEffect(e.target)}
								/>
							</CInputGroup>
							<CInputGroup className="mb-3">
								<CInputGroupText>
									<CIcon icon={cilBirthdayCake} />
								</CInputGroupText>
								<CInputGroupText>Birthday</CInputGroupText>
								<CFormInput
									type='date'
									// ref={e => inputs.current[4] = e}
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
								<CFormInput placeholder='Gender' disabled></CFormInput>
								<CInputGroupText>
									<CFormCheck
										type='radio'
										// ref={e => inputs.current[5] = e}
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
										// ref={e => inputs.current[6] = e}
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
			</CRow>
		</CModalBody>
		<CModalFooter>
			회원가입 토대 + 프로필 사진 수정 구현 필요
		</CModalFooter>
  </>)
}

export default EditProfile;