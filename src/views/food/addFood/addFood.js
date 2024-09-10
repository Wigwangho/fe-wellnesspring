import React, { useEffect, useState } from 'react';
import { CCard, CCardBody, CCol, CCardHeader, CRow, CButton, CProgress, CTable, CTableBody, CTableDataCell,CTableHead, CTableHeaderCell,CTableRow  } from '@coreui/react';
import { CChartBar, CChartPie } from '@coreui/react-chartjs';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function addFood() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  // 날짜를 하루씩 증가시키는 함수
  const incrementDate = () => {
    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() + 1)));
  };

  // 날짜를 하루씩 감소시키는 함수
  const decrementDate = () => {
    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() - 1)));
  };

  return (
    <div>
      <h2>Select a date</h2>

      {/* DatePicker와 버튼을 세로로 배치 */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy/MM/dd"
        />

        <div style={{ marginTop: '10px' }}>
          <button onClick={decrementDate} style={{ marginRight: '10px' }}>⬅️</button>
          <button onClick={incrementDate}>➡️</button>
        </div>
      </div>

      {selectedDate && <p>Selected Date: {selectedDate.toDateString()}</p>}

      {/* 아침 및 링크들 추가 */}
      <div style={{ marginTop: '20px' }}>
        <h3>아침</h3>
        <a href="#add-food" style={{ marginRight: '10px' }}>음식 추가</a>
        <a href="#quick-tools">빠른 도구</a>
      </div>

      {/* 구분선 */}
      <hr style={{ margin: '20px 0' }} />

      {/* 우측 하단에 테이블 추가 */}
      <div style={{ position: 'absolute', bottom: '200px', right: '20px' }}>
        <CTable border="1" style={{ borderCollapse: 'collapse', width: '400px' }}>
          <CTableHead>
          <CTableRow style={{ backgroundColor: 'blue', color: 'white' }}>
            <CTableHeaderCell scope="col">칼로리</CTableHeaderCell>
            <CTableHeaderCell scope="col">단백질</CTableHeaderCell>
            <CTableHeaderCell scope="col">탄수화물</CTableHeaderCell>
            <CTableHeaderCell scope="col">지방</CTableHeaderCell>
            <CTableHeaderCell scope="col">나트륨</CTableHeaderCell>
          </CTableRow>
          </CTableHead>
          <CTableBody>
          <CTableRow>
            <CTableHeaderCell>2000</CTableHeaderCell>
            <CTableHeaderCell>50g</CTableHeaderCell>
            <CTableHeaderCell>300g</CTableHeaderCell>
            <CTableHeaderCell>70g</CTableHeaderCell>
            <CTableHeaderCell>2400mg</CTableHeaderCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell>2500</CTableHeaderCell>
            <CTableHeaderCell>60g</CTableHeaderCell>
            <CTableHeaderCell>350g</CTableHeaderCell>
            <CTableHeaderCell>80g</CTableHeaderCell>
            <CTableHeaderCell>2500mg</CTableHeaderCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell>500</CTableHeaderCell>
            <CTableHeaderCell>10g</CTableHeaderCell>
            <CTableHeaderCell>50g</CTableHeaderCell>
            <CTableHeaderCell>10g</CTableHeaderCell>
            <CTableHeaderCell>100mg</CTableHeaderCell>
          </CTableRow>
          </CTableBody>
        </CTable>
      </div>
    </div>
  );
}


export default addFood;
