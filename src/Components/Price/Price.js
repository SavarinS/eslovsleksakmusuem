import React, { Component } from 'react';
import './Price.scss';
import Car from '../../img/car.jpg';

class Price extends Component {
    render (){
        return (
            <div className="Price">
                <div className="Price-img">
                    <img src= { Car } alt="Car"/>
                </div>

                <div className="Price-info">
                    <h4>Entré: Vuxna 60 SEK</h4>
                    <h4>Barn & ungdom (5-15 år) 30 SEK</h4>
                </div>
            </div>
        )
    }
}

export default Price;