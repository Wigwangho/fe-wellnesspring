import React from 'react';
import {
  CContainer, CRow, CCol, CFormInput, CButton, CFormLabel, CFormSelect, CCard, CCardBody
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

function PersonalFood() {
  return (
    <CContainer className="mt-4">
      {/* 제목과 음식 작성 버튼 */}
      <CRow className="mb-4 justify-content-between">
        <CCol>
          <h2>개인 음식</h2>
        </CCol>
        <CCol xs="auto">
          <CButton color="primary">
            음식 작성
          </CButton>
        </CCol>
      </CRow>

      {/* 검색창 */}
      <CRow className="mb-3">
        <CCol xs="12" md="8">
          <CFormLabel htmlFor="foodSearch">이름으로 개인 음식을 검색하세요.</CFormLabel>
          <div className="d-flex">
            <CFormInput
              type="text"
              id="foodSearch"
              placeholder="검색"
            />
            <CButton color="dark" className="ms-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001a1.007 1.007 0 0 0-.117.118l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.117-.118zm-5.742 0a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
              </svg>
            </CButton>
          </div>
        </CCol>
      </CRow>

      {/* 설명 */}
      <CRow className="mb-3">
        <CCol>
          <p>
            개인 음식을 조회, 수정 또는 삭제하려면 아래에 해당 음식을 클릭하십시오.
            검색 상자를 사용하여 선택 항목의 범위를 좁히십시오.
          </p>
        </CCol>
      </CRow>

      {/* 음식 매칭 */}
      <CRow>
        <CCol>
          <h5>음식 매칭:</h5>
          <CCard>
            <CCardBody>
              <p>검색된 결과가 없습니다.</p>
              <p>제안 사항:</p>
              <ul>
                <li>철자가 모두 올바르게 입력되었는지 확인하세요.</li>
                <li>재료로 검색해보세요.</li>
                <li>‘사과’ 같이 보다 일반적인 키워드를 검색해보세요.</li>
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default PersonalFood;
