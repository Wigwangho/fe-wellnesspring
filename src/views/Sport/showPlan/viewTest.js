// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CRow,
//   CCardText,
//   CCardTitle,
//   CButton
// } from "@coreui/react";
// import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 hook
//
// const SportPlanView = () => {
//   const [sportPlans, setSportPlans] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // 페이지 이동을 위한 훅
//
//   const fetchSportPlans = async () => {
//     try {
//       const response = await axios.get("http://localhost:9999/sport/plan/view", {
//         withCredentials: true,
//       });
//       setSportPlans(response.data);
//     } catch (error) {
//       setError("운동 계획을 불러오는 중 문제가 발생했습니다.");
//     }
//   };
//
//   const handleDelete = async (id) => {
//
//     try {
//       console.log("Deleting plan with ID:", id);  // 디버그용 로그
//       await axios.delete(`http://localhost:9999/sport/delete/plan/${id}`);
//       alert("운동계획 삭제 완료");
//       fetchSportPlans(); // 삭제 후 새로고침
//     } catch (error) {
//       alert("삭제하는 중 문제가 발생했습니다.");
//     }
//   };
//
//   const handleEdit = (id) => {
//     navigate(`/sport/modify/plan/${id}`); // 수정 페이지로 이동
//   };
//
//   useEffect(() => {
//     fetchSportPlans();
//   }, []);
//
//   return (
//     <div>
//       <h2>내 운동 계획</h2>
//
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {sportPlans.length === 0 && !error && <p>운동 계획이 없습니다.</p>}
//       {sportPlans.length > 0 && (
//         <CRow>
//           {sportPlans.map((plan, index) => (
//             <CCol sm="12" md="6" lg="4" key={index} className="mb-4">
//               <CCard>
//                 <CCardHeader>
//                   <CCardTitle>
//                     운동 계획 {plan.id} - {plan.items.map(item => item.sportName).join(', ')}
//                   </CCardTitle>
//                 </CCardHeader>
//                 <CCardBody>
//                   <CCardText>
//                     <strong>시작 시간:</strong> {plan.totalSportStart} <br />
//                     <strong>종료 시간:</strong> {plan.totalSportEnd} <br />
//                     <strong>총 운동 시간:</strong> {plan.totalDuration} 분 <br />
//                     <strong>소모 칼로리:</strong> {plan.totalBurnKcal} kcal
//                   </CCardText>
//                   <div className="d-flex justify-content-end">
//                     <CButton
//                       color="warning"
//                       onClick={() => handleEdit(plan.id)}
//                       className="me-2"
//                     >
//                       수정
//                     </CButton>
//                     <CButton
//                       color="danger"
//                       onClick={() => handleDelete(plan.id)}
//                     >
//                       삭제
//                     </CButton>
//                   </div>
//                 </CCardBody>
//               </CCard>
//             </CCol>
//           ))}
//         </CRow>
//       )}
//     </div>
//   );
// };
//
// export default SportPlanView;
