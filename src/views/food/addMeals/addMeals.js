import React, { useEffect, useState } from 'react';
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CButton, CModal, CModalHeader, CModalBody, CModalFooter } from '@coreui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

function AddMeals() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [mealData, setMealData] = useState([]);
  const [newMealName, setNewMealName] = useState(''); // 새로운 식사 이름 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [editMealId, setEditMealId] = useState(null); // 수정할 식사 ID
  const [editedMealName, setEditedMealName] = useState(''); // 수정된 식사 이름

  const [editedAmounts, setEditedAmounts] = useState({}); // 각 음식의 수정된 amount를 저장하는 상태

  const incrementDate = () => {
    setSelectedDate(new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000)); // 하루 더하기
  };

  const decrementDate = () => {
    setSelectedDate(new Date(selectedDate.getTime() - 24 * 60 * 60 * 1000)); // 하루 빼기
  };

  const fetchMealData = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const user_id = 'userid_test';
    console.log('Requesting data for (local):', formattedDate);
    axios.get('http://localhost:9999/dashboard/meals/getMealbyDate', {
      params: {
        meal_date: formattedDate,
        user_id: user_id,
      },
    })
      .then(response => {
        console.log('Data received:', response.data);
        setMealData(response.data);
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

  // meal_id 기준으로 데이터를 그룹화하는 함수
  const groupByMealId = () => {
    const groupedData = {};

    mealData.forEach((meal) => {
      if (!groupedData[meal.meal_id]) {
        groupedData[meal.meal_id] = [];
      }
      groupedData[meal.meal_id].push(meal);
    });

    return groupedData;
  };

  const groupedMealData = groupByMealId();
  const ThisUserId = 'userid_test';

  const handleAddMeal = () => {
    if (!newMealName) {
      alert('식사 이름을 입력하세요.');
      return;
    }

    axios.post('http://localhost:9999/dashboard/meals/addMeal', null, {
      params: {
        meal: newMealName,
        user_id: ThisUserId,
      },
    })
      .then(response => {
        console.log('식사 추가 성공:', response.data);
        fetchMealData(selectedDate);
        setNewMealName('');
      })
      .catch(error => {
        console.error('Error adding meal:', error);
      });
  };

  const handleDeleteMeal = (mealId) => {
    if (window.confirm('정말로 이 식사를 삭제하시겠습니까?')) {
      axios.post(`http://localhost:9999/dashboard/meals/deleteMeal`, null, {
        params: {
          meal_id: mealId,
        },
      })
        .then(response => {
          console.log('식사 삭제 성공:', response.data);
          fetchMealData(selectedDate);
        })
        .catch(error => {
          console.error('Error deleting meal:', error);
        });
    }
  };

  const handleEditMeal = (mealId, currentMealName) => {
    setEditMealId(mealId);
    setEditedMealName(currentMealName);
    setIsModalOpen(true);
  };

  const handleSaveMealEdit = () => {
    axios.post(`http://localhost:9999/dashboard/meals/updateMeal`, null, {
      params: {
        meal_id: editMealId,
        meal: editedMealName,
      },
    })
      .then(response => {
        console.log('식사 이름 수정 성공:', response.data);
        fetchMealData(selectedDate);
        setIsModalOpen(false);
      })
      .catch(error => {
        console.error('Error updating meal:', error);
      });
  };

  const handleDeleteFood = (mealDetailId) => {
    if (window.confirm('정말로 이 음식을 삭제하시겠습니까?')) {
      axios.post(`http://localhost:9999/dashboard/meals/deleteMealDetail`, null, {
        params: {
          mealDetailId: mealDetailId,
        },
      })
        .then(response => {
          console.log('음식 삭제 성공:', response.data);
          fetchMealData(selectedDate);
        })
        .catch(error => {
          console.error('Error deleting food:', error);
        });
    }
  };

  // amount 변경 핸들러
  const handleAmountChange = (mealDetailId, newAmount) => {
    setEditedAmounts(prevState => ({
      ...prevState,
      [mealDetailId]: newAmount,
    }));
  };

  // amount 저장 핸들러
  const handleSaveAmount = (mealDetailId) => {
    const newAmount = editedAmounts[mealDetailId];

    axios.post(`http://localhost:9999/dashboard/meals/updateMealDetail`, null, {
      params: {
        id: mealDetailId,
        amount: newAmount,
      },
    })
      .then(response => {
        console.log('Amount 수정 성공:', response.data);
        fetchMealData(selectedDate);
        // 수정된 amount 상태에서 제거
        setEditedAmounts(prevState => {
          const updatedState = { ...prevState };
          delete updatedState[mealDetailId];
          return updatedState;
        });
      })
      .catch(error => {
        console.error('Error updating amount:', error);
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

      {/* 데이터가 없을 때 메시지 표시 */}
      {mealData.length === 0 ? (
        <p>데이터가 없습니다. 식사 데이터를 추가하세요.</p>
      ) : (
        Object.keys(groupedMealData).map((mealId) => (
          <div key={mealId} style={{ marginTop: '20px' }}>
            <h3>{groupedMealData[mealId][0].meal}</h3>
            <div>
              <a href={`../food/addFood?meal_id=${mealId}`} style={{ marginRight: '10px' }}>음식 추가</a>
              <CButton color ="link" onClick={() => handleEditMeal(mealId, groupedMealData[mealId][0].meal)} style={{ marginRight: '10px' }}>식사 수정</CButton>
              <CButton color ="link" onClick={() => handleDeleteMeal(mealId)}>식사 삭제</CButton>
            </div>

            <CTable border="1" style={{ borderCollapse: 'collapse', width: '100%', marginTop: '10px' }}>
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
                  <CTableHeaderCell scope="col"></CTableHeaderCell> {/* 새로운 작업 열 추가 */}
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {groupedMealData[mealId].map((meal, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{meal.food_name}</CTableDataCell>
                    <CTableDataCell>{meal.kcal}</CTableDataCell>
                    <CTableDataCell>{meal.protein}g</CTableDataCell>
                    <CTableDataCell>{meal.carbohydrate}g</CTableDataCell>
                    <CTableDataCell>{meal.fat}g</CTableDataCell>
                    <CTableDataCell>{meal.na}mg</CTableDataCell>
                    <CTableDataCell>{meal.cholesterol}mg</CTableDataCell>
                    <CTableDataCell>{meal.fiber}g</CTableDataCell>
                    <CTableDataCell>
                      {/* amount를 입력 필드로 변경 */}
                      <input
                        type="number"
                        value={editedAmounts[meal.id] !== undefined ? editedAmounts[meal.id] : meal.amount}
                        onChange={(e) => handleAmountChange(meal.id, e.target.value)}
                        style={{ width: '60px' }}
                      />g
                      {/* 저장 버튼 */}
                      {editedAmounts[meal.id] !== undefined && (
                        <CButton color="link"onClick={() => handleSaveAmount(meal.id)}>저장</CButton>
                      )}
                    </CTableDataCell>
                    <CTableDataCell>
                      <CButton color="link"onClick={() => handleDeleteFood(meal.id)}>삭제</CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </div>
        ))
      )}

      <hr style={{ margin: '20px 0' }} />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={newMealName}
          onChange={(e) => setNewMealName(e.target.value)}
          placeholder="식사 이름 입력"
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddMeal}>새로운 식사 추가</button>
      </div>

      {/* CoreUI 모달 창 */}
      <CModal visible={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CModalHeader>
          <h5>식사 수정</h5>
        </CModalHeader>
        <CModalBody>
          <input
            type="text"
            value={editedMealName}
            onChange={(e) => setEditedMealName(e.target.value)}
            placeholder="식사 이름 수정"
            style={{ width: '100%' }}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setIsModalOpen(false)}>
            취소
          </CButton>
          <CButton color="primary" onClick={handleSaveMealEdit}>
            저장
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
}

export default AddMeals;
