import React from 'react';
import './index.css';
import Kaf from './Kaf';
export default class Sklep extends React.Component{
    render()
    {
        return(
            <div className='Sklep'>
                <table>
                <tr><td><Kaf/></td><td><Kaf/></td><td><Kaf/></td><td><Kaf/></td><td><Kaf/></td><td><Kaf/></td></tr>
                <tr><td><Kaf/></td><td><Kaf/></td><td><Kaf/></td><td><Kaf/></td><td><Kaf/></td><td><Kaf/></td></tr>
                </table>
            </div>)
    }
}