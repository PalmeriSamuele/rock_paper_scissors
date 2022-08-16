import React from 'react';
import logo from '../images/logo.svg'
import Game from './Game';
const Header = () => {
    return (
        <div className='header d-flex justify-content-between p-3 mt-3 align-items-center'>
            <img src={logo} alt="" />
            <div className='d-flex flex-column align-items-center score_count_box bg-light text-center p-2 fw-bold'>
                <div className='d-flex flex-column align-items-center justify-content-center'>SCORE <span className='score_count'>12</span></div>
            
            </div>
        </div>
    );
};

export default Header;