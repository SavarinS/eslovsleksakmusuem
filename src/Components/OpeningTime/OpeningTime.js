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
                
                    <h6>Öppettid</h6>
                    <h6>onsdag - lödag kl.12 - 16</h6>
                
                </div>

            </div>
        )
    }
}

export default OpeningTime;