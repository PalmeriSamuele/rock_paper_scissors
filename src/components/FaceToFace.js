import React from 'react';
import Card from './Card';

const faceToFace = (props) => {
    let our_move = props.svg.split('/')[3].split('.')[0].split('-')[1];
    let opponent_move = props.random_move.split('/')[3].split('.')[0].split('-')[1];
    let move
    return (
        <div className='ftf_box d-flex justify-content-between align-items-center text-light '>
            <div className='d-flex flex-column gap-4'>
                <p className='fs-4 text-center'>YOUR PICKED</p>
                <div className='ourMove'>
                    <Card  svg={props.svg}  color={props.color} />
                </div>
                
            </div>
            <div className='text-center'>
                <p>YOUY WIN</p>
                <button className='playbutton text-danger bg-light'>PLAY AGAIN</button>
            </div>
            
           <div className='d-flex flex-column gap-4'>
                <p className='fs-4 text-center'>THE HOUSE PICKED</p>
                <div className='toAnimateMove'>
                    <Card  svg={props.random_move}  color={props.random_color} />
                </div>
           </div>
        </div>
    );
};

export default faceToFace;