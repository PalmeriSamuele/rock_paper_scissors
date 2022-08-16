import React, { useState } from 'react';
import Game from '../components/Game';
import Header from '../components/Header';
import RuleModal from '../components/RuleModal';
import Rules from '../components/Rules';

const RockPaperCissor = () => {
    return (
        <div className='d-flex align-items-center flex-column justify-content-start'>
            <Header/>
            <Game />
            <Rules />
            <RuleModal />
        </div>
    );
};

export default RockPaperCissor;