import React, { useState, memo } from 'react';
import { useHistory, Route } from "react-router-dom";

const Searchappoinment = () => {


return(
<>
<div className="row">
            <div className="col-md-8 inline-flex">
              <b class="font-24">Appointments</b>
              <div class="form-check ml-3">
                <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label class="form-check-label font-24 ml-3" for="flexRadioDefault1">Default radio</label>
              </div>
              <div class="form-check ml-3">
                <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label class="form-check-label font-24 ml-3" for="flexRadioDefault2">Default checked radio</label>
              </div>
            </div>
            <div className="col-md-4">
              <div class="md-form mt-0">
                <input class="form-control custom-class" type="text" placeholder="Search" aria-label="Search" />
              </div>
            </div>
          </div>
</>
)
}
export default memo(Searchappoinment)
