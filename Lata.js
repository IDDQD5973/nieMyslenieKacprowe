import React from 'react';
import './index.css';
import Rok from './Rok';
export default class Lata extends React.Component{
    render()
    {
        return(
            <div className='Lata'>
                <table><tr><td><Rok/></td><td><Rok/></td></tr></table>
            </div>)
    }
}