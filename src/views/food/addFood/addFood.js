import React, { useState } from 'react';
import {
  CContainer, CRow, CCol, CButton, CFormInput, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

function AddFood() {
  const [activeKey, setActiveKey] = useState(1);
  const [searchString, setSearchString] = useState('');
  const [foodData, setFoodData] = useState([]); // 검색된 음식 데이터를 저장할 상태
  const [amount, setAmount] = useState(0); // 선택된 음식의 양
  const [selectedFood, setSelectedFood] = useState(null); // 선택된 음식 정보
  const [visible, setVisible] = useState(false); // 모달 표시 여부

  // 음식 검색 함수
  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:9999/dashboard/meals/getNutrient?search_string=${searchString}`);
      const data = await response.json();
      setFoodData(data); // 음식 데이터를 상태에 저장
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // 음식 추가 함수
  const handleAddMeal = async () => {
    if (selectedFood) {
      try {
        const response = await fetch('http://localhost:9999/dashboard/meals/addMealDetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            meal_id: 1, // 여기서 meal_id는 고정되어 있지만 실제로는 다른 값으로 설정 가능
            food_id: selectedFood.food_id,
            amount: amount,
          }),
        });

        if (response.ok) {
          alert('음식이 성공적으로 추가되었습니다.');
        } else {
          alert('음식 추가에 실패했습니다.');
        }
      } catch (error) {
        console.error('Error adding meal details:', error);
      }
    }

    setVisible(false); // 모달 닫기
  };

  return (
    <CContainer>
      {/* 제목 */}
      <CRow className="mt-4 mb-3">
        <CCol>
          <h2>음식 추가</h2>
        </CCol>
      </CRow>

      {/* 음식 데이터베이스 검색 */}
      <CRow className="mb-3 align-items-center">
        <CCol xs="8">
          <CFormInput
            type="text"
            placeholder="음식 데이터베이스를 이름으로 검색"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)} // 검색어 상태 업데이트
          />
        </CCol>
        <CCol xs="4">
          <CButton
            color="success"
            onClick={handleSearch} // 검색 버튼 클릭 시 API 호출
          >
            검색
          </CButton>
        </CCol>
      </CRow>

      {/* 검색 결과 표시 */}
      <CRow className="mb-3">
        <CCol>
          <h5>검색 결과:</h5>
          {foodData.length === 0 ? (
            <p>검색된 음식이 없습니다.</p>
          ) : (
            foodData.map((food, index) => (
              <CRow key={index} className="mb-2">
                <CCol xs="6">
                  <CButton
                    color="primary"
                    onClick={() => {
                      setSelectedFood(food);
                      setVisible(true); // 모달을 열고, 선택한 음식 저장
                    }}
                  >
                    {food.food_name}
                  </CButton>
                </CCol>
                <CCol xs="4">
                  <CFormInput
                    type="number"
                    placeholder="양 입력"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} // 양 입력 값 업데이트
                  />
                </CCol>
              </CRow>
            ))
          )}
        </CCol>
      </CRow>

      {/* 모달 */}
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>음식 추가 확인</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>해당 식사에 {selectedFood?.food_name}을(를) 추가할까요?</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>아니오</CButton>
          <CButton color="primary" onClick={handleAddMeal}>예</CButton>
        </CModalFooter>
      </CModal>
    </CContainer>
  );
}

export default AddFood;
