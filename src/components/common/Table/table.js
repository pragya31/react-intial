import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Table = (props) => {
    let {scopedSlots, fields = [], widgetName = '', items, addButton, channelFilter} = props;
    const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
    const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
    const [page, setPage] = useState(currentPage);

    useEffect(() => {
        currentPage !== page && setPage(currentPage)
    }, [currentPage, page])

    const tableFilterPlaceholder = {placeholder : 'Search...', label : 'Search'}

  return (
      <>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <strong className="text-muted">{widgetName}</strong>
            {addButton}
          </CCardHeader>
          <CCardBody className="t-body">
            {channelFilter}
          <CDataTable
          addTableClasses="table1"
          
            items={items}
            fields={fields}
            hover
            striped
            itemsPerPage={20}
            activePage={page}
            tableFilter = {tableFilterPlaceholder}
            clickableRows
            itemsPerPageSelect
            sorter
            pagination
            scopedSlots = {scopedSlots}
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    {/* {showEditForm ? 'hello' : ''} */}
    </>
  )
}

export default Table
