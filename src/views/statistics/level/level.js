import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow, CButton, CProgress, CWidgetStatsB, CTable, CTableBody ,CTableDataCell ,CTableFoot, CTableHead, CTableHeaderCell, CTableRow   } from '@coreui/react'
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

const level = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={12}>

      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>칼로리 소모량 순위</CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">순위</CTableHeaderCell>
                  <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                  <CTableHeaderCell scope="col">이번주 칼로리 소모량</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>김일등</CTableDataCell>
                  <CTableDataCell>99</CTableDataCell>
                </CTableRow>
                <CTableRow color="primary">
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>김이등</CTableDataCell>
                  <CTableDataCell>98</CTableDataCell>
                </CTableRow>
                <CTableRow color="secondary">
                  <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="success">
                  <CTableHeaderCell scope="row">Success</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="danger">
                  <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="warning">
                  <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="info">
                  <CTableHeaderCell scope="row">Info</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="light">
                  <CTableHeaderCell scope="row">Light</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="dark">
                  <CTableHeaderCell scope="row">나</CTableHeaderCell>
                  <CTableDataCell>내이름</CTableDataCell>
                  <CTableDataCell>61</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>근력운동 순위</CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">순위</CTableHeaderCell>
                  <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                  <CTableHeaderCell scope="col">이번주 근력운동 순위</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>김일등</CTableDataCell>
                  <CTableDataCell>99</CTableDataCell>
                </CTableRow>
                <CTableRow color="primary">
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>김이등</CTableDataCell>
                  <CTableDataCell>98</CTableDataCell>
                </CTableRow>
                <CTableRow color="secondary">
                  <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="success">
                  <CTableHeaderCell scope="row">Success</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="danger">
                  <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="warning">
                  <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="info">
                  <CTableHeaderCell scope="row">Info</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="light">
                  <CTableHeaderCell scope="row">Light</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="dark">
                  <CTableHeaderCell scope="row">나</CTableHeaderCell>
                  <CTableDataCell>내이름</CTableDataCell>
                  <CTableDataCell>61</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>걷기 순위</CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">순위</CTableHeaderCell>
                  <CTableHeaderCell scope="col">이름</CTableHeaderCell>
                  <CTableHeaderCell scope="col">걷기 평균 시간</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>김일등</CTableDataCell>
                  <CTableDataCell>99</CTableDataCell>
                </CTableRow>
                <CTableRow color="primary">
                  <CTableHeaderCell scope="row">2</CTableHeaderCell>
                  <CTableDataCell>김이등</CTableDataCell>
                  <CTableDataCell>98</CTableDataCell>
                </CTableRow>
                <CTableRow color="secondary">
                  <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="success">
                  <CTableHeaderCell scope="row">Success</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="danger">
                  <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="warning">
                  <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="info">
                  <CTableHeaderCell scope="row">Info</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="light">
                  <CTableHeaderCell scope="row">Light</CTableHeaderCell>
                  <CTableDataCell>Cell</CTableDataCell>
                  <CTableDataCell>Cell</CTableDataCell>
                </CTableRow>
                <CTableRow color="dark">
                  <CTableHeaderCell scope="row">나</CTableHeaderCell>
                  <CTableDataCell>내이름</CTableDataCell>
                  <CTableDataCell>61</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  )
}

export default level
