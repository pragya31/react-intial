import React,{memo} from "react";
import { useHistory,useRouteMatch } from "react-router-dom";
import {CContainer, CRow, CCol, CForm, CLabel, CInput, CSelect, CFormGroup, CTextarea, CImg} from '@coreui/react'
import Modal from "../../common/Modal/modal";

const EditLive = (props) =>{

    let {setEditLive} = props

   let formConfig = <CContainer>
   <CRow>
     <CCol>
       <CForm method="post">
         <CFormGroup className='editLive'>
           <CLabel >Live On : </CLabel>
           <span className='url'> (https://www.youtube.com/watch?v=) </span>
           <span> D-iZxyhJLiY </span>
           <CInput
             type="name"
             id="liveOn"
             name="liveOn"
             placeholder="Enter Live On..."
           />
         </CFormGroup>
       </CForm>
     </CCol>
   </CRow>

 </CContainer>,
        closeModal = () =>{
            setEditLive(false)
      };
    return(
    <Modal children = {formConfig} title = {'Edit'} size = {''} className = {'Liveon'} closeModal={closeModal}/>
    )
};

export default memo(EditLive);