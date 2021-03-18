import React,{memo, useEffect, useState} from "react";
import {CModalBody, CModal, CModalHeader, CModalFooter, CButton} from '@coreui/react';
var _ = require('lodash');

const REQUIRED_MSG = 'Please fill all the required fields';

const Modal = ({children, title, size, className, closeModal, errorMsg, okButton, noButton, onSubmit, error, setError}) =>{

  const closeError = () =>{
    setError({})
  };

  let [dirt, setDirt] = useState(false);


  useEffect(() => {
    if(!!errorMsg){
      setDirt(true)
    }
  }, [errorMsg]);

  
  let msg = errorMsg ?  errorMsg : REQUIRED_MSG;

    return (
    <>
      <CModal className = {className} title={title} size = {size} show= {true} fade = {true} closeOnBackdrop = {false}  onClose = {closeModal} >
        <CModalHeader closeButton ><h2>{title}</h2></CModalHeader>
        <CModalBody>
          {!_.isEmpty(error) && 
          <div className='errorMessage'> <div>{msg}</div>
          <span className = 'closeError' onClick = {closeError}></span>
          </div>} 
          {children} </CModalBody>
        <CModalFooter>
          <CButton  color="primary" onClick = {onSubmit} >{okButton || 'Save'}</CButton>{' '}
          <CButton color="secondary" onClick = {closeModal} >{noButton || 'Cancel'}</CButton>
        </CModalFooter>
      </CModal>
    </>
    )
}

export default memo(Modal);