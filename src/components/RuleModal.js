
import React from 'react';
import rule_img from '../images/image-rules.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const RuleModal = () => {
    function closeModal(){
        let rule_modal = document.getElementsByClassName('rule_modal')[0]
        rule_modal.style.display = 'none';
       

    }
    return (
        <div className='rule_modal bg-light p-4'>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h2 className='fw-bold'>RULES</h2>
                <FontAwesomeIcon onClick={closeModal} icon={faXmark} className='close_icon fa-xl text-secondary'/>

            </div>
            <img src={rule_img} alt="" />
        </div>
    );
};

export default RuleModal;