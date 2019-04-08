import React, { Component } from 'react';
import './OpeningTime.scss';
import Lego from '../../img/lego.jpg';

class OpeningTime extends Component {
    render (){
        return (
            <div className="Opening">
                
                <div className="Opening-img">
                    <img src= { Lego } alt="Lego"/>
                </div>

                <div className="Opening-time">
                
                    <h4>Öppettid</h4>
                    <h4>onsdag - lödag kl.12 - 16</h4>
                
                </div>

            </div>
        )
    }
}

export default OpeningTime;