import React, { useEffect, useState } from 'react';
import Card from './Card';
import Bg_triangle from '../images/bg-triangle.svg'
import paper_svg from '../images/icon-paper.svg';
import rock_svg from '../images/icon-rock.svg'
import cissor_svg from '../images/icon-scissors.svg'
import FaceToFace from './FaceToFace';
let colors = ['#516ef5','#e8a81f','#dd3d59'];
let moves = [paper_svg,rock_svg,cissor_svg];
const Game = () => {
    
    let [playerChoice, setPLayerChoice] = useState('none');
    let [selectGame,setSelectGame] = useState('state1')
    if(selectGame == 'state1'){
        return (

            <div className='game_box d-flex justify-content-center align-items-center'>
                <img className='triangle' src={Bg_triangle} alt="" />
                <div className='paper '>
                    <Card  svg={paper_svg} color={colors[0]} setPageState={setSelectGame} setPC={setPLayerChoice}/>
                </div>
                <div className='rock' >
                    <Card  svg={rock_svg}  color={colors[1]} setPageState={setSelectGame} setPC={setPLayerChoice}/>
                </div>
                <div className='scissor'>
                    <Card   svg={cissor_svg}  color={colors[2]} setPageState={setSelectGame} setPC={setPLayerChoice}/>
    
                </div>
            </div>
        )
    }
    else {
        if(playerChoice == 'rock'){
            let random_move = Math.floor(Math.random()*moves.length)
            
            return(
                <FaceToFace svg={rock_svg}  color={colors[1]} random_move={moves[random_move]} random_color={colors[random_move]}/>
  

            )
        }
        if(playerChoice == 'scissors'){
            let random_move =Math.floor(Math.random()*moves.length)
            return(
           
                <FaceToFace svg={cissor_svg}  color={colors[2]} random_move={moves[random_move]} random_color={colors[random_move]}/>
     
            )
        }
        if(playerChoice == 'paper'){
            let random_move = Math.floor(Math.random()*moves.length)
            return(
        
                <FaceToFace svg={paper_svg}  color={colors[0]} random_move={moves[random_move]} random_color={colors[random_move]}/>

   
            )
        }


    }



};

export default Game;