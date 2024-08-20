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

const sport = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={12}>

      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>운동 시간</CCardHeader>
          <CCardBody>
            <CButton color="link">자세히 보기</CButton>
            <CChartBar
              data={{
                labels: ['월', '화', '수', '목', '금', '토', '일'],
                datasets: [
                  {
                    label: '운동 시간',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },

                ],
              }}
              labels="kcal"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>지난주와 비교</CCardHeader>
          <CCardBody>
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
          <CCardHeader>운동 목표 확인</CCardHeader>
          <CCardBody>
            <CCol xs={6}>
              <CWidgetStatsB
                className="mb-3"
                progress={{ color: 'success', value: 75 }}
                text=""
                title="운동A 목표치까지"
                value="89.9%"
              />
              <CWidgetStatsB
                className="mb-3"
                progress={{ color: 'success', value: 75 }}
                text=""
                title="단백질 섭취 목표치까지"
                value="89.9%"
              />
            </CCol>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default sport
