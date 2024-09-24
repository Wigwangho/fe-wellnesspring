import React, { useEffect, useState } from 'react';
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

function AddMeals() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [mealData, setMealData] = useState([]);
  const [newMealName, setNewMealName] = useState(''); // 새로운 식사 이름 상태

  // 날짜를 하루씩 증가시키는 함수
  const incrementDate = () => {
    setSelectedDate(new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000)); // 하루 더하기
  };

  // 날짜를 하루씩 감소시키는 함수
  const decrementDate = () => {
    setSelectedDate(new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000)); // 하루 빼기
  };

  // 서버에서 데이터를 가져오는 함수
  const fetchMealData = (date) => {
    const formattedDate = date.toISOString().split('T')[0]; // 날짜를 yyyy-MM-dd 형식으로 포맷
    axios.get('http://localhost:9999/dashboard/meals/getMealbyDate', {
      params: {
        meal_date: formattedDate,
        user_id: 'userid_test' // 필요한 경우 user_id도 전달
      }
    })
      .then(response => {
        setMealData(response.data); // 서버에서 받은 데이터를 상태에 저장
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    if (selectedDate) {
      fetchMealData(selectedDate);
    }
  }, [selectedDate]);

  // mealData를 meal로 그룹화하여 합산하는 함수
  const aggregateMealData = () => {
    const aggregatedData = {};

    mealData.forEach(meal => {
      if (!aggregatedData[meal.meal]) {
        aggregatedData[meal.meal] = { ...meal };
      } else {
        aggregatedData[meal.meal].kcal = meal.kcal;
        aggregatedData[meal.meal].protein = meal.protein;
        aggregatedData[meal.meal].carbohydrate = meal.carbohydrate;
        aggregatedData[meal.meal].fat = meal.fat;
        aggregatedData[meal.meal].na = meal.na;
        aggregatedData[meal.meal].cholesterol = meal.cholesterol;
        aggregatedData[meal.meal].fiber = meal.fiber;
        aggregatedData[meal.meal].amount = meal.amount;
      }
    });

    return Object.values(aggregatedData);
  };

  const aggregatedMealData = aggregateMealData();

  // 새로운 식사 추가 요청 함수
  const handleAddMeal = () => {
    if (!newMealName) {
      alert('식사 이름을 입력하세요.');
      return;
    }

    axios.post('http://localhost:9999/dashboard/meals/addMeal', {
      meal: newMealName,
      user_id: 'userid_test' // 필요한 경우 user_id도 전달
    })
      .then(response => {
        console.log('식사 추가 성공:', response.data);
        fetchMealData(selectedDate); // 새로운 식사 데이터를 다시 가져옴
      })
      .catch(error => {
        console.error('Error adding meal:', error);
      });
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
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

      {/* 서버에서 mealData가 없으면 새로운 식사를 추가할 수 있는 메시지 */}
      <div style={{ marginTop: '20px' }}>
        {aggregatedMealData.length > 0 ? (
          <>
            <h3>{mealData[0]?.meal || '식사'}</h3>
            <a href="../food/addMeals" style={{ marginRight: '10px' }}>음식 추가</a>
            <a href="#quick-tools">빠른 도구</a>
          </>
        ) : (
          <>
            <p>입력할 식사 데이터가 없습니다. 새로운 식사를 추가할까요?</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                value={newMealName}
                onChange={(e) => setNewMealName(e.target.value)} // 입력 필드 업데이트
                placeholder="식사 이름 입력"
                style={{ marginRight: '10px' }}
              />
              <button onClick={handleAddMeal}>새로운 식사 추가</button>
            </div>
          </>
        )}
      </div>

      <hr style={{ margin: '20px 0' }} />

      {aggregatedMealData.length > 0 ? (
        <CTable border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <CTableHead>
            <CTableRow style={{ backgroundColor: 'blue', color: 'white' }}>
              <CTableHeaderCell scope="col">음식</CTableHeaderCell>
              <CTableHeaderCell scope="col">칼로리</CTableHeaderCell>
              <CTableHeaderCell scope="col">단백질</CTableHeaderCell>
              <CTableHeaderCell scope="col">탄수화물</CTableHeaderCell>
              <CTableHeaderCell scope="col">지방</CTableHeaderCell>
              <CTableHeaderCell scope="col">나트륨</CTableHeaderCell>
              <CTableHeaderCell scope="col">콜레스테롤</CTableHeaderCell>
              <CTableHeaderCell scope="col">섬유질</CTableHeaderCell>
              <CTableHeaderCell scope="col">양</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {aggregatedMealData.map((meal, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{meal.food_name}</CTableDataCell>
                <CTableDataCell>{meal.kcal}</CTableDataCell>
                <CTableDataCell>{meal.protein}g</CTableDataCell>
                <CTableDataCell>{meal.carbohydrate}g</CTableDataCell>
                <CTableDataCell>{meal.fat}g</CTableDataCell>
                <CTableDataCell>{meal.na}mg</CTableDataCell>
                <CTableDataCell>{meal.cholesterol}mg</CTableDataCell>
                <CTableDataCell>{meal.fiber}g</CTableDataCell>
                <CTableDataCell>{meal.amount}g</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      ) : (
        <p>해당 날짜에 식사 데이터가 없습니다.</p>
      )}
    </div>
  );
}

export default AddMeals;
