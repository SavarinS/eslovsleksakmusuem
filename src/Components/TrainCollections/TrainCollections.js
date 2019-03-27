import React, { Component } from 'react';
import Trains from '../../img/Trains.jpg';
import { NavLink } from 'react-router-dom';

class TrainCollection extends Component {
    render (){
        return (
            <div className="Train-collection">
                <div className="Train-model">
                    {/* <img src={require("./Train-model.jpg")} alt="Train"/> */}
                    <img src= { Trains } alt= "Trains"/>
                </div>

                <div className="Description">
                    <p>300 kvadratmeter modelljärnvägen</p>

                    <div className="to-page-model">
                        <NavLink to="modeljarnvagen"><p>Modelljärnvägen</p></NavLink>
                    </div>
                </div>
            </div>

        )
    }
}

export default TrainCollection;