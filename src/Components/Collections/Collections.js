import React, { Component } from 'react';
import './Collections.scss';
import { NavLink } from 'react-router-dom';


class Collections extends Component {
    render () {
        return (
            <div className="Collection">
                <div className="Collection-title">
                    <NavLink to="Samligar">Våra samligar</NavLink>
                </div>
                <div className="Collection-content">
                    <p>400 barbiedockor</p>
                    <p>4 000 modellbilar</p>
                    <p>9 000 tennsoldater</p>
                    <p>1 500 uppbyggda Legosater</p>
                </div>
            </div>
        )
    }
}

export default Collections;