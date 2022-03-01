import React from 'react';
import './index.css';
import Mie from './Mie';
export default class Mies extends React.Component{
    render()
    {
        return(
            <div className='Mies'>
                <table><tr><td><Mie/></td><td><Mie/></td><td><Mie/></td><td><Mie/></td></tr></table>
            </div>)
    }
}