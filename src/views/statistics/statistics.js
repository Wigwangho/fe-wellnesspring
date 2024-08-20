import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow, CButton, CProgress, CWidgetStatsB } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
  CChartBubble
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'

const statistics = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={12}>

      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>칼로리 변동</CCardHeader>
          <CCardBody>
            <CButton color="link" href="/kcal">자세히 보기</CButton>
            <CChartBar
              data={{
                labels: ['1일차', '2일차', '3일차', '4일차', '5일차', '6일차', '7일차'],
                datasets: [
                  {
                    label: '섭취 칼로리',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                  {
                    label: '소모 칼로리',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>운동</CCardHeader>
          <CCardBody>
            <CButton color="link" href="sport">자세히 보기</CButton>
            <CChartLine
              data={{
                labels: ['월', '화', '수', '목', '금', '토', '일'],
                datasets: [
                  {
                    label: '지난주 운동',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                  {
                    label: '이번주 운동',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>영양소 섭취</CCardHeader>
          <CCardBody>
            <CButton color="link" href="food">자세히 보기</CButton>
            <CChartPie
              data={{
                labels: ['탄수화물', '단백질', '지방'],
                datasets: [
                  {
                    data: [300, 50, 100, ],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>나의 수준</CCardHeader>

          <CCardBody>
            <CButton color="link" href="level">자세히 보기</CButton>
            <CProgress color="success" variant="striped" animated value={25}>운동 상위 25%</CProgress>
            <p></p>
            <CProgress color="info" variant="striped" animated value={50}>칼로리 섭취량 상위 50%</CProgress>
            <p></p>
            <CProgress color="warning" variant="striped" animated value={75}>단백질 섭취량 상위 75%</CProgress>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default statistics
