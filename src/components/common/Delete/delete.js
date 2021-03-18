import React from "react";
import Modal from "../Modal/modal";


const Delete = ({setOpenDelete}) =>{
    const closeModal = () =>{
        setOpenDelete(false)
    };
    const msg = <p>Are sure you want to delete this item?</p>
    return(
    <Modal children = {msg} title = {'Confirm'} className={'deleteComp'} okButton={'Yes'} noButton={'No'} closeModal = {closeModal}/>

    )
}

export default Delete;