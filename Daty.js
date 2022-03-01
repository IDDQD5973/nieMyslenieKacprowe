import React from 'react';
import './index.css';
import Lata from './Lata';
import Mies from './Mies';
export default class Daty extends React.Component{
    render()
    {
        return(
            <div className='Daty'>
                <Lata/>
                <Mies/>
            </div>)
    }
}