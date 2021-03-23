import React, { useState, memo } from 'react';
import { useHistory, Route } from "react-router-dom";

const Notification = () => {


return (
    <>
   <div className="col-md-3 notification">

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

</div>
</>
)
}

export default memo(Notification)