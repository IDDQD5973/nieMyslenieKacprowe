import React from 'react';
import './index.css';
import Spon from './Spon';
import Daty from './Daty';
export default class Up extends React.Component{
    render()
    {
        return(
            <div className='Up'>
                <Spon/>
                <Daty/>
            </div>)
    }
}