import React, { Component } from 'react';
import Trains from '../../img/Trains.jpg';
//import { NavLink } from 'react-router-dom';
import './TrainCollections.scss';

class TrainCollection extends Component {
    render (){
        return (
            <div className="Train-collection">
                <div className="Train-model">
                    {/* <img src={require("./Train-model.jpg")} alt="Train"/> */}
                    <img src= { Trains } alt= "Trains"/>
                </div>

                <div className="Description">
                    <h6>300 kvadratmeter modelljärnvägen</h6>

                    {/* <div className="to-page-model">
                        <NavLink to="modeljarnvagen"><p>Modelljärnvägen</p></NavLink>
                    </div> */}
                </div>
            </div>

        )
    }
}

export default TrainCollection;