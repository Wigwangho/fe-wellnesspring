import React from 'react';
import {
  CContainer, CRow, CCol, CFormInput, CButton, CCard, CCardBody, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

function PersonalMeal() {
  return (
    <CContainer fluid className="mt-4">
      <CRow>
        {/* 페이지 제목 */}
        <CCol>
          <h2>개인 식사</h2>
        </CCol>
      </CRow>

      <CRow className="mt-4">
        {/* 개인 식사 검색 */}
        <CCol md={6}>
          <CRow>
            <CCol>
              <h5>개인 식사 검색:</h5>
            </CCol>
          </CRow>
          <CRow className="mb-2">
            <CCol>
              <div className="d-flex">
                <CFormInput
                  type="text"
                  placeholder="검색"
                />
                <CButton color="dark" className="ms-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001a1.007 1.007 0 0 0-.117.118l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.117-.118zm-5.742 0a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
                  </svg>
                </CButton>
              </div>
              <p className="mt-2">
                오른쪽에 보거나 삭제할 식사를 클릭하십시오. 식사를 작성하려면 원하는 음식을 <a href="#">음식 일지</a>에 추가하고 "빠른 도구", "식사 기록"을 차례로 클릭하십시오.
              </p>
            </CCol>
          </CRow>
        </CCol>

        {/* 식사 매칭 */}
        <CCol md={6}>
          <h5>식사 매칭:</h5>
          <CCard>
            <CCardBody>
              결과를 찾을 수 없음.
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {/* 식사 세부 정보 */}
      <CRow className="mt-4">
        <CCol>
          <h5>식사 세부 정보</h5>
          <CTable hover responsive>
            <CTableHead color="primary">
              <CTableRow>
                <CTableHeaderCell>이 식사 내 항목</CTableHeaderCell>
                <CTableHeaderCell>칼로리</CTableHeaderCell>
                <CTableHeaderCell>탄수화물</CTableHeaderCell>
                <CTableHeaderCell>지방</CTableHeaderCell>
                <CTableHeaderCell>단백질</CTableHeaderCell>
                <CTableHeaderCell>나트륨</CTableHeaderCell>
                <CTableHeaderCell>당</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>합계</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
                <CTableDataCell>0</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default PersonalMeal;
