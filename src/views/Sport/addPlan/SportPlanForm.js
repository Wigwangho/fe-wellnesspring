import React, { useState, useEffect } from "react";
import { CForm, CRow, CCol, CButton, CFormInput, CFormLabel } from "@coreui/react";
import Select from "react-select";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import axios from "axios";

const SportPlanForm = () => {
  const [sportDTO, setSportDTO] = useState({
    userId: "yoohwanjoo@nate.com",  // 세션에서 가져온 userId로 업데이트 예정
    sportItems: [
      {
        sportName: "",
        sportStart: "",
        sportEnd: "",
        kcal: 0,
      },
    ],
    alType: "운동", // 알림 타입 고정값
    alertTime: "", // 운동 시작 시간 달력에서 고른값
    scheduled: 0, // 사용자가 입력하는 정수값 (몇분 전에 알림)
  });

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  // 세션에서 userId를 가져오는 함수
  const fetchUserId = async () => {
    try {
      const response = await axios.get("http://localhost:9999/auth/userinfo", {
        withCredentials: true, // 쿠키(JSESSIONID)를 포함하여 요청
      });
      setSportDTO((prevState) => ({
        ...prevState,
        userId: response.data, // 세션에서 가져온 userId 설정
      }));
    } catch (error) {
      setError("로그인 정보가 없습니다.");
      console.error("Error fetching userId", error);
    }
  };

  useEffect(() => {
    fetchUserId();  // 컴포넌트가 로드될 때 userId를 가져옴
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:9999/sport/category");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching sport categories", error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newSportItems = [...sportDTO.sportItems];
    newSportItems[index] = {
      ...newSportItems[index],
      [name]: value,
    };
    setSportDTO({ ...sportDTO, sportItems: newSportItems });
  };

  const handleSportItemChange = (selectedOption, index) => {
    const selectedCategory = categories.find(
      (category) => category.sportName === selectedOption.value
    );

    const newSportItems = [...sportDTO.sportItems];
    newSportItems[index] = {
      ...newSportItems[index],
      sportName: selectedOption.value,
      kcal: selectedCategory ? selectedCategory.kcal : 0,
    };

    setSportDTO({ ...sportDTO, sportItems: newSportItems });
  };

  const handleDateChange = (date, field, index) => {
    const newSportItems = [...sportDTO.sportItems];
    newSportItems[index] = {
      ...newSportItems[index],
      [field]: date,
    };

    setSportDTO({
      ...sportDTO,
      sportItems: newSportItems,
      alertTime: newSportItems[0].sportStart, // alertTime에 첫 번째 운동 시작 시간을 설정
    });
  };

  const handleAddSportItem = () => {
    setSportDTO((prevState) => ({
      ...prevState,
      sportItems: [
        ...prevState.sportItems,
        {
          sportName: "",
          sportStart: "",
          sportEnd: "",
          kcal: 0,
        },
      ],
    }));
  };

  const handleDeleteSportItem = () => {
    if (sportDTO.sportItems.length > 1) {
      setSportDTO((prevState) => ({
        ...prevState,
        sportItems: prevState.sportItems.slice(0, -1), // 마지막 항목 제거
      }));
    }
  };

  const handleScheduledChange = (e) => {
    const scheduledValue = parseInt(e.target.value, 10); // 숫자 값으로 변환
    if (!isNaN(scheduledValue)) {
      setSportDTO((prevState) => ({
        ...prevState,
        scheduled: scheduledValue,
      }));
    }
  };

  const handleSavePlan = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9999/sport/save/plan", sportDTO, {
        withCredentials: true,  // 쿠키를 포함하여 요청
      });
      alert(response.data); // 알림 메시지
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error("Error saving sport plan", error);
    }
  };

  return (
    <CForm onSubmit={handleSavePlan}>
      {error && <p style={{ color: "red" }}>{error}</p>}  {/* 에러 메시지 출력 */}

      {sportDTO.sportItems.map((sportItem, index) => (
        <div key={index}>
          {index > 0 && <hr />} {/* 첫 번째 항목에는 구분선을 표시하지 않음 */}

          <CRow>
            <CCol xs="12" md="6">
              <CFormLabel htmlFor={`sportName-${index}`}>운동을 선택하세요</CFormLabel>
              <Select
                id={`sportName-${index}`}
                name="sportName"
                options={categories.map((category) => ({
                  value: category.sportName,
                  label: category.sportName,
                }))}
                onChange={(selectedOption) => handleSportItemChange(selectedOption, index)}
                placeholder="운동을 검색하세요"
                classNamePrefix="react-select"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    backgroundColor: '#1f2631',
                    borderColor: '#555',
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: '#fff',
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    color: '#aaa',
                  }),
                  menu: (provided) => ({
                    ...provided,
                    backgroundColor: '#1f2631',
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected ? '#3b4a63' : '#1f2631',
                    color: '#fff',
                  }),
                  input: (provided) => ({
                    ...provided,
                    color: '#fff',
                  }),
                }}
              />
            </CCol>

            <CCol xs="12" md="6">
              <CFormLabel htmlFor={`kcal-${index}`}>분당 소모칼로리</CFormLabel>
              <CFormInput
                type="number"
                id={`kcal-${index}`}
                name="kcal"
                value={sportItem.kcal}
                readOnly
                placeholder="분당 소모칼로리"
              />
            </CCol>
          </CRow>
          <CRow>
            <CCol xs="12" md="6">
              <label>예상 운동시작시간</label>
              <Datetime
                value={sportItem.sportStart}
                onChange={(date) => handleDateChange(date, "sportStart", index)}
                inputProps={{ placeholder: "운동 시작 시간을 선택하세요" }}
              />
            </CCol>
          </CRow>

          <CRow>
            <CCol xs="12" md="6">
              <label>예상 운동종료시간</label>
              <Datetime
                value={sportItem.sportEnd}
                onChange={(date) => handleDateChange(date, "sportEnd", index)}
                inputProps={{ placeholder: "운동 종료 시간을 선택하세요" }}
              />
            </CCol>
          </CRow>
        </div>
      ))}

      <CRow className="align-items-center mt-3">
        <CCol xs="12" md="6">
          <label>몇분전에 알림을 드릴까요?</label>
          <CFormInput
            type="number"
            id="scheduled"
            name="scheduled"
            value={sportDTO.scheduled}
            onChange={handleScheduledChange} // 변경 핸들러 추가
            placeholder="몇분전에 알림을 드릴까요?"
          />
        </CCol>

        <CCol xs="12" md="6" className="d-flex justify-content-end">
          <CButton type="button" color="secondary" className="me-2" onClick={handleAddSportItem}>
            운동 추가하기
          </CButton>

          <CButton type="button" color="danger" className="me-2" onClick={handleDeleteSportItem}>
            운동 삭제하기
          </CButton>

          <CButton type="submit" color="primary">
            운동계획 저장하기
          </CButton>
        </CCol>
      </CRow>
    </CForm>
  );
};

export default SportPlanForm;
