import React, {useState, memo} from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CWidgetDropdown, CBadge, CForm, CLabel, CInput, CSelect, CFormGroup, CTextarea, CImg } from '@coreui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import EditLive from "./editLive";

const Dashboard = () => {

  let [editLive, setEditLive] = useState(false);
  let [playLive, setPlayLive] = useState(false);

  const redirect = () =>{
    setEditLive(true);
  }

  const onPlay = ( mode) =>{
    if(mode === 'play'){
      window.open("https://www.youtube.com/watch?v=GXfsI-zZO7s", "_blank");
    }
    
  }

  return (
    <>
    {/* <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <strong className="text-muted">Dashboard</strong>
          </CCardHeader>
          <CCardBody>
            <CRow className='dashboardCard'>
              <CCol sm='4'>
              <CWidgetDropdown
                  color="gradient-primary"
                  header="200"
                  text="Users"
                >
                  <a href = "http://localhost:3000/#/user_management"></a>
                </CWidgetDropdown>
              </CCol>
              <CCol sm='4'>
              <CWidgetDropdown
                  color="gradient-warning"
                  header="20"
                  text="Races Today"
                >
                  <a href = "http://localhost:3000/#/race_management"></a>
                </CWidgetDropdown>
              </CCol>
              <CCol className = 'dashboardCardLive' sm='4'>
              <CWidgetDropdown
                  color="gradient-danger"
                  text="Live on: D-iZxyhJLiY"
                >
                  
                  <span className='edit' onClick = {e => redirect()}><FontAwesomeIcon  icon={faPen} /> </span>
                  { <span onClick = {e => onPlay('play')}><FontAwesomeIcon  icon={faPlay} /> </span>}
                  {/* {playLive && <span onClick = {e => onPlay(false)}><FontAwesomeIcon  icon={faPause} /> </span>} */}
                {/* </CWidgetDropdown> 
              </CCol>
            </CRow>
            <CRow className='dashboardCard cardSpace'>
            <CCol sm='4'>
              <CWidgetDropdown
                  color="gradient-warning"
                  header="1"
                  text="Channel"
                >
                  <a href = "http://localhost:3000/#/channel_management"></a>
                </CWidgetDropdown>
              </CCol>
              </CRow>
            <CRow className= 'dashboardTable'>
            <CCol >
                <table className="table table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>Race ID</th>
                    <th>Race Name</th>
                    <th>Race Time</th>
                    <th>Status</th>
                    <th>Change Status</th>
                    <th>Trending</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                <td>
                    <div>124</div>
                  </td>
                  <td>
                    <div>Yiorgos Avraamu</div>
                  </td>
                  
                  <td>
                    <div>5:30</div>
                  </td>
                  <td>
                  <CBadge className = 'statusLive'>
                      Live
                  </CBadge>
                  </td>
                  <td>
                    <div>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Live</option>
                      <option value="2">Past</option>
                      <option value="3">Upcoming</option>
                    </CSelect>
                    </div>
                  </td>
                  <td>
                    <div className='dashboardCheckBox'>
                    <input type="checkbox" className="form-check-input"/>
                    </div>
                  </td>
                </tr>
                <tr>
                <td>
                    <div>236</div>
                  </td>
                  <td>
                    <div>Yiorgos Avraamu</div>
                  </td>
                  <td>
                    <div>5:30</div>
                  </td>
                  <td>
                  <CBadge className = 'statusUpcoming'>
                      Upcoming
                  </CBadge>
                  </td>
                  <td>
                  <div>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Live</option>
                      <option value="2">Past</option>
                      <option value="3">Upcoming</option>
                    </CSelect>
                    </div>
                  </td>
                  <td>
                    <div className='dashboardCheckBox'>
                    <input type="checkbox" className="form-check-input"/>
                    </div>
                  </td>
                </tr>
                <tr>
                <td>
                    <div>124</div>
                  </td>
                  <td>
                    <div>Yiorgos Avraamu</div>
                  </td>
                  
                  <td>
                    <div>5:30</div>
                  </td>
                  <td>
                  <CBadge className = 'statusPast'>
                      Past
                  </CBadge>
                  </td>
                  <td>
                    <div>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Live</option>
                      <option value="2">Past</option>
                      <option value="3">Upcoming</option>
                    </CSelect>
                    </div>
                  </td>
                  <td>
                    <div className='dashboardCheckBox'>
                    <input type="checkbox" className="form-check-input"/>
                    </div>
                  </td>
                </tr>
                </tbody>
                </table>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow> */}
    {
      editLive && <EditLive setEditLive = {setEditLive}/>
    }
    </>
  )
}

export default Dashboard
