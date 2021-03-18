import React,{memo, useState, useRef, useEffect} from "react";
import { useHistory,useRouteMatch } from "react-router-dom";
import {CContainer, CRow, CCol, CForm, CLabel, CInput, CSelect, CFormGroup, CTextarea, CButton} from '@coreui/react'
import Modal from "../../common/Modal/modal";
import validateFields from "./validationConfig";
import {onsubmitValidation, onChangeValidation} from '../../common/Validation/validation'
var _ = require('lodash');

const AddSubAdmin = () =>{

  let [password, setPassword] = useState(''),
      [customPassword, setCustomPassword] = useState(true),
      [value, setValue] = useState({}),
      [error, setError] = useState({}),
      [isCustomPassword, setIsCustomPassword] = useState(true),
      [errorMsg, setErrorMsg] = useState('');
      const ref = useRef(value);


  const generatePassword = (val) =>{
    setCustomPassword(val)
    if(!val){
      let randomPassword = Math.random().toString(36).slice(-8);
      setPassword(randomPassword);
    }
  };

  const copyPassword = () =>{
    let copyPassword = document.getElementById("password");
    copyPassword.select();
 };

 

 const onsubmit = (value) => {
    if(onsubmitValidation(value, validateFields, setErrorMsg, setError, error, )){
      return history.goBack();
    }
  }

  useEffect(() => {
      ref.current = value;
  }, [value]);

  useEffect(() =>{
    let randomPassword = Math.random().toString(36).slice(-8);
    setPassword(randomPassword);
  },[isCustomPassword])

  const handleChange = (event, iscustomPassword = true) =>{
    // setIsCustomPassword(iscustomPassword);
    // if(!isCustomPassword){
    //   event.target.name = 'password'
    //   event.target.value = password;
    //   setValue({...value, [event.target.name] : event.target.value });
    // }else{
    //   console.log("Else wala -------------")
    //   setValue({...value, [event.target.name] : event.target.value });
    // }
   
   setValue({...value, [event.target.name] : event.target.value });
   if( onChangeValidation(validateFields , event.target.name, event.target.value, ref.current, setErrorMsg, setError, error)){
    if(Object.keys(error).length){
      for(let err in error){
          if(error[event.target.name]){
            delete error[event.target.name];
          }
      }
    }
   }
  }


   let formConfig = <CContainer>
   <CForm action="" method="post" >
   <CRow>
     <CCol sm="6">
         <CFormGroup>
           <CLabel>الاسم الأول / First Name <span className = 'astrick'>*</span></CLabel>
           <CInput
             type="name"
             id="fname"
             name="fname"
             placeholder="Enter First Name..."
             value = {value.fname || ''}
             onChange = {e => handleChange(e)}
             className = {error.fname || error.all ? 'error' : ''}
           />
           <CLabel>المحمول / Mobile Number <span className = 'astrick'>*</span> </CLabel>
           <CInput
             type="text"
             id="mobileNumber"
             name="mobileNumber"
             placeholder="Enter Mobile Number..."
             value = {value.mobileNumber || ''}
             onChange = {handleChange}
             className = {error.mobileNumber || error.all ? 'error' : ''}
           />
           <CLabel>تاريخ الانضمام / Date Of Joining </CLabel>
           <CInput
             type="date"
             id="dateOfJoining"
             name="dateOfJoining"
             placeholder="Enter Date Of Joining..."
             value = {value.dateOfJoining || ''}
             onChange = {handleChange}
           />
           <CLabel>الجنسين / Gender</CLabel><br/>
           <div className = 'subadminradio'>
            <input id = 'male' name = 'gender' value = '1' onChange = {handleChange} type= "radio" />
            <CLabel> جعدان  </CLabel><br/>
            <input id = 'female' name="gender" value = '2' onChange = {handleChange} type= "radio" />
            <CLabel> بكار </CLabel><br/>
            </div>
         </CFormGroup>
     </CCol>
     <CCol sm="6">
         <CFormGroup>
         <CLabel>اسم العائلة / Last Name <span className = 'astrick'>*</span></CLabel>
           <CInput
             type="name"
             id="lname"
             name="lname"
             placeholder="Enter Last Name..."
             required
             value = {value.lname || ''}
             onChange = {handleChange}
             className = {error.lname || error.all ? 'error' : ''}
           />
           <CLabel>البريد الإلكتروني / Email<span className = 'astrick'>*</span></CLabel>
           <CInput
             type="email"
             id="emailId"
             name="emailId"
             placeholder="Enter Email ID..."
             autoComplete="email"
             onChange = {handleChange}
             className = {error.emailId || error.all ? 'error' : ''}

           />
           <CLabel id = 'status'>حالة المسؤول الفرعي / Sub Admin Status <span className = 'astrick'>*</span></CLabel>
              <CSelect name = 'status' onChange = {handleChange} className = {error.status || error.all ? 'error' : ''} >
              <option value="0">Please select</option>
              <option value="1">Active</option>
              <option value="2">InActive</option>
              </CSelect>
           <CLabel>كلمه المرور / Password <span className = 'astrick'>*</span></CLabel>
           <CInput
             type="text"
             id="password"
             name="password"
             placeholder="Enter Password..."
             value = {value.password || ''}
             onChange = {handleChange}
             className = {error.password || error.all ? 'error' : ''}
           />
           <CRow>
           <CCol sm = '12'>
            <CButton color='primary' className='passwordButton' onClick = {e => handleChange(e, false)}>Generate Password</CButton>
            <CButton color='primary' className='passwordButton' onClick = {e => copyPassword()}>Copy</CButton>
           </CCol>
           </CRow>
         </CFormGroup>
     </CCol>
     <CCol>
     <CLabel>عنوان / Address</CLabel>
        <CTextarea 
            name="address" 
            id="address" 
            rows="2"
            placeholder="Enter Address..." 
        />
     </CCol>
   </CRow>
   <CRow className= "accessModuleInput">
       <CCol sm='5'>
         <h4 className="font-weight-bold"> وحدة الوصول النمطية /  Access Module <span className = 'astrick'>* <h6>(Select at least one module access)</h6></span></h4>  

             <div>
             <div className="form-check form-check-inline">
                 <input type="checkbox" id="inlineCheckbox1" name = 'accessModule' value="1"  onChange={handleChange}/>
                 <CLabel>User Management</CLabel>
             </div>
             <div className="form-check form-check-inline">
                 <input className="form-check-input" type="checkbox" name = 'accessModule' id="inlineCheckbox2" value="2" onChange={handleChange}/>
                 <CLabel >Channel Management</CLabel>
             </div>
             <div className="form-check form-check-inline">
                 <input className="form-check-input" type="checkbox" name = 'accessModule' id="inlineCheckbox3" value="3" onChange={handleChange}/> 
                 <CLabel >Reward Management</CLabel>                
             </div>
             <div className="form-check form-check-inline">
                 <input className="form-check-input" type="checkbox" name = 'accessModule' id="inlineCheckbox4" value="4" onChange={handleChange}/> 
                 <CLabel >Notification Management</CLabel>                
             </div>
             </div>
     </CCol>
     <CCol sm='5'> 
             <h4/>
             <div className= "colAlign">
                 <div className="form-check form-check-inline">
                     <input type="checkbox" id="inlineCheckbox5" name = 'accessModule' value="5" onChange={handleChange}/>
                     <CLabel>Camel Management</CLabel>
                 </div>
                 <div className="form-check form-check-inline">
                     <input className="form-check-input" type="checkbox" name = 'accessModule' id="inlineCheckbox6" value="6" onChange={handleChange}/>
                     <CLabel >Race Management</CLabel>
                 </div>
                 <div className="form-check form-check-inline">
                     <input className="form-check-input" type="checkbox" name = 'accessModule' id="inlineCheckbox7" value="7" onChange={handleChange}/> 
                     <CLabel >Payment Management</CLabel>                
                 </div>
             </div>
     </CCol>
   </CRow>.
   </CForm>
 </CContainer> 
 
//  
  const history = useHistory(),
        closeModal = () =>{
          history.goBack();
      };
    return(
    <Modal children = {formConfig} title = {'Sub Admin'} onSubmit = {e => onsubmit(value)} errorMsg = {errorMsg} size = {'lg'} setError = {setError} error = {error}  className = {'subAdminModal'} closeModal={closeModal}/>
    )
};

export default memo(AddSubAdmin);