import React from 'react';


const Card = (props) => {
    function chooseMove(){
        props.setPageState('state2');

        let _choice = props.svg.split('/')[3].split('.')[0].split('-')[1]
        props.setPC(_choice);


    }
    return (
        <div onClick={chooseMove} className='capsule_box d-flex justify-content-center align-items-center' style= {{borderColor:props.color}}>
            <img className='card-img' src={props.svg} alt="" />
        </div>
    );
};

export default Card;