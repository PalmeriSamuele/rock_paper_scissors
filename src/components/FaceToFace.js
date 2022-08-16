import React, { useEffect } from 'react';
import Card from './Card';
import {result} from '../functions/result.js'

const FaceToFace = (props) => {
    
    let our_move = props.svg.split('/')[3].split('.')[0].split('-')[1];
    let opponent_move = props.random_move.split('/')[3].split('.')[0].split('-')[1];

    let resultat = result(our_move,opponent_move);

    console.log(our_move);
    console.log(opponent_move);

    console.log(resultat);
    function playAgain(){
        props.setPageState('state1')
        props.setPC('none')
    }
    useEffect(() => {
        let score = document.getElementsByClassName('score_count')[0];
        console.log(score.textContent);

        
        return () => {
            if (resultat == 'YOU WIN'){
                score.innerHTML = parseInt(score.textContent)+1;
        
            }
            if (resultat == 'YOU LOSE'){
                if(parseInt(score.textContent)>0){
                    score.innerHTML = parseInt(score.textContent)-1;
                }
               
        
            }
            resultat = 'none'

        }
    }, [])
      

    

    
    return (
        <div className='ftf_box d-flex justify-content-around align-items-center text-light mb-4'>
            <div className='d-flex flex-column gap-4'>
                <p className='fs-4 text-center fw-bold'>YOUR PICKED</p>
                <div className='ourMove'>
                    <Card  svg={props.svg}  color={props.color} />
                </div>
                
            </div>
            <div className='result_modul text-center'>
                <p className='fs-1 fw-bold'>{resultat}</p>
                <button onClick={playAgain} className='playbutton text-danger bg-light fw-bold'>PLAY AGAIN</button>
            </div>
            
           <div className='d-flex flex-column gap-4'>
                <p className='fs-4 text-center fw-bold'>THE HOUSE PICKED</p>
                <div className='toAnimateMove'>
                    <Card  svg={props.random_move}  color={props.random_color} />
                </div>
           </div>
        </div>
    );
};

export default FaceToFace;