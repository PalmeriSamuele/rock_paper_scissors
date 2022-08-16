import React from 'react';
import Game from '../components/Game';
import Header from '../components/Header';

const RockPaperCissor = () => {
    return (
        <div className='d-flex align-items-center flex-column'>
            <Header />
            <Game />
        </div>
    );
};

export default RockPaperCissor;