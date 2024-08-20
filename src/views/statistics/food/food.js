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

const food = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
        <CCol xs={6}>
          <CCard className="mb-4" style={{ height: '700px' }}>
            <CCardHeader>영양소 섭취</CCardHeader>
            <CCardBody>
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
        <CCard className="mb-4" style={{ height: '700px' }}>
          <CCardHeader>이번주 목표 및 현재 섭취량</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['탄수화물', '단백질', '지방', '비타민A', '비타민B', '칼슘', '비타민C'],
                datasets: [
                  {
                    label: '현재 섭취량',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                  {
                    label: '목표 섭취량',
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
    </CRow>
  )
}

export default food
