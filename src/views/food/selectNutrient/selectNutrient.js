import React from 'react';
import {
  CContainer, CRow, CCol, CFormInput, CButton, CFormLabel, CFormSelect,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

function App() {
  return (
    <CContainer className="mt-4">
      {/* 제목 */}
      <CRow className="mb-4">
        <CCol>
          <h2>칼로리 표, 음식에 대한 영양 성분</h2>
        </CCol>
      </CRow>

      {/* 검색창 */}
      <CRow className="mb-3">
        <CCol xs="12" md="8">
          <CFormLabel htmlFor="foodSearch">음식, 브랜드 또는 레스토랑 검색</CFormLabel>
          <div className="d-flex">
            <CFormInput
              type="text"
              id="foodSearch"
              placeholder="김치"
            />
            <CButton color="dark" className="ms-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001a1.007 1.007 0 0 0-.117.118l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.117-.118zm-5.742 0a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
              </svg>
            </CButton>
          </div>
        </CCol>
      </CRow>

      {/* 음식 매칭 */}
      <CRow>
        <CCol>
          <h5>음식 매칭:</h5>
          <CFormSelect size="lg">
            <option>음식 목록</option>
            {/* 음식 리스트 아이템을 여기에 추가 */}
          </CFormSelect>
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default App;
