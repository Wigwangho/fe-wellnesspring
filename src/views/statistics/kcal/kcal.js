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

const kcal = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={12}>

      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>칼로리 변동</CCardHeader>
          <CCardBody>
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
          <CCardHeader>몸무게 변화</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['월', '화', '수', '목', '금', '토', '일'],
                datasets: [
                  {
                    label: '몸무게',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 220, 220, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                  {
                    label: '섭취한 칼로리',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(151, 187, 205, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                  {
                    label: '소모한 칼로리',
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
          <CCardHeader>목표 섭취량까지</CCardHeader>
          <CCardBody>
            <CButton color="link">자세히 보기</CButton>
            <CCol xs={6}>
              <CWidgetStatsB
                className="mb-3"
                progress={{ color: 'success', value: 75 }}
                text=""
                title="이번주 섭취 목표"
                value="89.9%"
              />
              <CWidgetStatsB
                className="mb-3"
                progress={{ color: 'success', value: 75 }}
                text=""
                title="이번주 소모 목표"
                value="89.9%"
              />
            </CCol>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default kcal
