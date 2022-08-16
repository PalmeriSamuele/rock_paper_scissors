import React from 'react';

const Rules = () => {
    function showModal(){
        let rule_modal = document.getElementsByClassName('rule_modal')[0]
        rule_modal.style.display = 'block';
  
    }


    return (
        <div onClick={showModal} className='rules_box text-light'>
            RULES
        </div>
    );
};

export default Rules;