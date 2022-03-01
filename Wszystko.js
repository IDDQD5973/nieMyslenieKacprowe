import React from 'react';
import './index.css';
import Up from './Up';
import Down from './Down';
export default class Wszystko extends React.Component{
    render()
    {
        return(
            <div className='Wszystko'>
                <Up/>
                <Down/>
            </div>)
    }
}