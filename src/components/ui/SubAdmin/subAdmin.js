import React, { useState, memo } from 'react';
import { useHistory, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'
import { CButton } from '@coreui/react';
import Table from "../../common/Table/table";
import Searchappoinment from "../Search/search"

import Notification from "../Notification/notification"
import SubAdminRoute from "../../common/nestedRoutes";
import Delete from "../../common/Delete/delete";
const AddSubAdmin = React.lazy(() => import('../SubAdmin/addSubAdminForm'));


const SubAdmin = () => {
  const history = useHistory();
  const [openDelete, setOpenDelete] = useState(false);
  const redirectToAdd = (mode) => {
    history.push(`/sub_admin/${mode}`);
  }
  return (
    <>
      <div className="row">
        <div className="col-md-9">
       <Searchappoinment/>
          <table class="table">
            <thead>
              <tr className="th d-flex justify-content-between ">
                <th scope="col">Patient Name</th>
                <th scope="col">Equipment Type</th>
                <th scope="col">Equipment Id</th>
                <th scope="col">Appointment Date</th>
                <th scope="col">Time And Duration</th>
                <th scope="col">Pateint Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tr d-flex justify-content-between success">
                <td>Horry Eliot <img src="../../../img/Location_Green.svg" /> </td>
                <td>MRI Scan</td>
                <td>EID2526</td>
                <td>10 Feb 2021</td>
                <td>11:30 hrs, 30 min</td>
                <td>
                  <select class="form-select">
                    <option selected> Comming</option>
                    <option> Reschedual</option>
                    <option> Cancel</option>
                  </select>
                </td>
                <td>
                  <span> <img src="../../../../img/call.svg" /> </span>
                  <span> <img src="../../../../img/Chat.svg" /> </span>
                  <span> <img src="../../../../img/Reschedule.svg" /> </span>
                  <span> <img src="../../../../img/Calender icon.svg" /> </span>
                </td>
              </tr>
              <tr className="tr d-flex justify-content-between danger">
                <td>Horry Eliot <img src="../../../img/Location_Red.svg" /></td>
                <td>Ultrasound</td>
                <td>EID2527</td>
                <td>15 Feb 2021</td>
                <td>10:30 hrs, 30 min</td>
                <td>
                  <select class="form-select">
                    <option> Comming</option>
                    <option select> Reschedual</option>
                    <option> Cancel</option>
                  </select>
                </td>
                <td>
                  <span> <img src="../../../../img/call.svg" /> </span>
                  <span> <img src="../../../../img/Chat.svg" /> </span>
                  <span> <img src="../../../../img/Reschedule.svg" /> </span>
                  <span> <img src="../../../../img/Calender icon.svg" /> </span>
                </td>
              </tr>
              <tr className="tr d-flex justify-content-between warning">
                <td>Horry Eliot <img src="../../../img/Location_Grey.svg" /></td>
                <td>ECG</td>
                <td>EID2528</td>
                <td>18 Feb 2021</td>
                <td>12:30 hrs, 30 min</td>
                <td>
                  <select class="form-select">
                    <option> Comming</option>
                    <option> Reschedual</option>
                    <option select> Cancel</option>
                  </select>
                </td>
                <td>
                  <span> <img src="../../../../img/call.svg" /> </span>
                  <span> <img src="../../../../img/Chat.svg" /> </span>
                  <span> <img src="../../../../img/Reschedule.svg" /> </span>
                  <span> <img src="../../../../img/Calender icon.svg" /> </span>
                </td>
              </tr>
              <tr className="tr d-flex justify-content-between warning">
                <td>Horry Eliot<img src="../../../img/Location_Grey.svg" /> </td>
                <td>MRI Scan</td>
                <td>EID2529</td>
                <td>25 Feb 2021</td>
                <td>02:30 hrs, 30 min</td>
                <td>
                  <select class="form-select">
                    <option select> Comming</option>
                    <option> Reschedual</option>
                    <option> Cancel</option>
                  </select>
                </td>
                <td>
                  <span> <img src="../../../../img/call.svg" /> </span>
                  <span> <img src="../../../../img/Chat.svg" /> </span>
                  <span> <img src="../../../../img/Reschedule.svg" /> </span>
                  <span> <img src="../../../../img/Calender icon.svg" /> </span>
                </td>
              </tr>
              <tr className="tr d-flex justify-content-between info">
                <td>Horry Eliot <img src="../../../img/Location_Grey.svg" /></td>
                <td>Ultrasound</td>
                <td>EID2530</td>
                <td>03 March 2021</td>
                <td>1:30 hrs, 30 min</td>
                <td>
                  <select class="form-select">
                    <option> Comming</option>
                    <option select> Reschedual</option>
                    <option> Cancel</option>
                  </select>
                </td>
                <td>
                  <span> <img src="../../../../img/call.svg" /> </span>
                  <span> <img src="../../../../img/Chat.svg" /> </span>
                  <span> <img src="../../../../img/Reschedule.svg" /> </span>
                  <span> <img src="../../../../img/Calender icon.svg" /> </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      <Notification/>
        {/* <Route exact path='/notification/add' render={props => <notification {...props} />} /> */}

        {/* <div className="col-md-3 notification">

          <div className="col-md-12 top-50">
            <div className="col-md-12 inline-flex no-padding">
              <div className="row mb-3">
                <div className="col-md-8">
                  <h3 className="side-bar"> NOTIFICATIONS</h3>
                </div>
                <div className="col-md-4">
                  <img class="hours" src="../../../img/Search.svg" />
                </div>
              </div>


            </div>
            <div class="card w-100">
              <div class="card-body">
                <h5 class="card-title">Appointment Reshudule</h5><span class="hours">10:30 hrs</span>

                <p class="card-text">Horry Eliot, EID2530.</p>
                <span> <img src="../../../../img/Calender icon.svg" /> 03 March 2021 15:00 hrs 15min</span>  </div>
            </div>

            <div class="card w-100">
              <div class="card-body">
                <h5 class="card-title">Appointment Reshudule</h5><span class="hours">10:30 hrs</span>

                <p class="card-text">Horry Eliot, EID2530.</p>
                <span> <img src="../../../../img/Calender icon.svg" /> 03 March 2021 15:00 hrs 15min</span>  </div>
            </div>
            <div class="card w-100">
              <div class="card-body">
                <h5 class="card-title">Appointment Reshudule</h5><span class="hours">10:30 hrs</span>

                <p class="card-text">Horry Eliot, EID2530.</p>
                <span> <img src="../../../../img/Calender icon.svg" /> 03 March 2021 15:00 hrs 15min</span>  </div>
            </div>
            <div class="card w-100">
              <div class="card-body">
                <h5 class="card-title">Appointment Reshudule</h5><span class="hours">10:30 hrs</span>

                <p class="card-text">Horry Eliot, EID2530.</p>
                <span> <img src="../../../../img/Calender icon.svg" /> 03 March 2021 15:00 hrs 15min</span>  </div>
            </div>
            <div class="card w-100">
              <div class="card-body">
                <h5 class="card-title">Appointment Reshudule</h5><span class="hours">10:30 hrs</span>

                <p class="card-text">Horry Eliot, EID2530.</p>
                <span> <img src="../../../../img/Calender icon.svg" /> 03 March 2021 15:00 hrs 15min</span>  </div>
            </div>

            <div class="card w-100">
              <div class="card-body">
                <h5 class="card-title">Appointment Reshudule</h5><span class="hours">10:30 hrs</span>
                <p class="card-text">Horry Eliot, EID2530.</p>
                <span> <img src="../../../../img/Calender icon.svg" /> </span>  03 March 2021 15:00 hrs 15min</div>
            </div>
          </div>

        </div> */}
      </div>

      {/* <SubAdminRoute/> */}
      <Route exact path='/sub_admin/add' render={props => <AddSubAdmin {...props} />} />
      <Route exact path='/sub_admin/edit' render={props => <AddSubAdmin {...props} />} />
      {openDelete && <Delete setOpenDelete={setOpenDelete} />}
    </>
  )
}

export default memo(SubAdmin)
