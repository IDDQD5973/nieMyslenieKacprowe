import React from 'react';
import './index.css';
import Plakietka from './Plakietka';
import Sklep from './Sklep';
export default class Down extends React.Component{
    render()
    {
        return(
            <div className='Down'>
                <Plakietka/><Sklep/>
            </div>)
    }
}