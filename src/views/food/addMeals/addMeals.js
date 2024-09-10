import React, { useState } from 'react';
import {
  CContainer, CRow, CCol, CButton, CFormInput, CNav, CNavItem, CNavLink, CTabContent, CTabPane,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
function addMeals() {
  const [activeKey, setActiveKey] = useState(1);

  return (
    <CContainer>
      {/* 제목 */}
      <CRow className="mt-4 mb-3">
        <CCol>
          <h2>아침 에 음식 추가</h2>
        </CCol>
      </CRow>

      {/* 음식 데이터베이스 검색 및 빠른 칼로리 추가 */}
      <CRow className="mb-3 align-items-center">
        <CCol xs="8">
          <CFormInput type="text" placeholder="음식 데이터베이스를 이름으로 검색" />
        </CCol>
        <CCol xs="4">
          <CButton color="success">검색</CButton>
          <a href="#calorie" style={{ float: 'right', marginTop: '5px' }}>
            빠른 칼로리 추가
          </a>
        </CCol>
      </CRow>

      {/* 즐겨찾는 항목 추가 */}
      <CRow className="mb-3">
        <CCol>
          <span>또는 즐겨찾는 항목 추가: </span>
          <a href="#favorites">???</a>
        </CCol>

      </CRow>
      <CCol>

      </CCol>
      <CRow>
        <CCol>
        <CButton color="success" className="ms-2">선택 항목 추가</CButton>
        </CCol>
        </CRow>
      {/* 탭 네비게이션 */}
      <CRow>
        <CCol>
          <CNav variant="tabs" role="tablist">
            <CNavItem>
              <CNavLink
                href="#"
                active={activeKey === 1}
                onClick={() => setActiveKey(1)}
              >
                최근
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                href="#"
                active={activeKey === 2}
                onClick={() => setActiveKey(2)}
              >
                자주 먹는 음식
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                href="#"
                active={activeKey === 3}
                onClick={() => setActiveKey(3)}
              >
                내 음식
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                href="#"
                active={activeKey === 4}
                onClick={() => setActiveKey(4)}
              >
                식사
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink
                href="#"
                active={activeKey === 5}
                onClick={() => setActiveKey(5)}
              >
                레시피
              </CNavLink>
            </CNavItem>
          </CNav>
        </CCol>
      </CRow>

      {/* 탭 콘텐츠 */}
      <CRow className="mt-3">
        <CCol>
          <CTabContent>
            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
              <p>아침 음식을 아직 추가하지 않았습니다.</p>
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
              <p>자주 먹는 음식 없음.</p>
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
              <p>내 음식 없음.</p>
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="meal-tab" visible={activeKey === 4}>
              <p>식사 정보 없음.</p>
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="recipe-tab" visible={activeKey === 5}>
              <p>레시피 정보 없음.</p>
            </CTabPane>
          </CTabContent>
        </CCol>
      </CRow>

      {/* 선택 항목 추가 및 삭제된 항목 보기 */}
      <CRow className="mt-3">
        <CCol>
          <CButton color="success" className="me-2">선택 항목 추가</CButton>
          <CButton color="success">삭제된 항목 보기</CButton>
          <p className="mt-2">참고: 모든 탭에서 선택한 항목이 추가됩니다.</p>
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default addMeals;
