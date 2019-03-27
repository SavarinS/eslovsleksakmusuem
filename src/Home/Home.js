import React, { Component } from 'react';
import Headers from '../Components/Header/Header';
import './Home.scss';
import Review from '../Components/Reviews/Reviews';
import Collections from '../Components/Collections/Collections';
import TrainCollection from '../Components/TrainCollections/TrainCollections';
import OpeningTime from '../Components/OpeningTime/OpeningTime';
import Price from '../Components/Price/Price';








class Home extends Component {
    
    render () {

            return (
                <div id="container">
                <Headers/>
                <Collections/>
                <Review/>
                <div className="Grid1">
                            <div className="column">
                               <TrainCollection/>
                                
                            </div>
                    

                            <div className="column">
                               <OpeningTime/>
                                
                            </div>

                            <div className="column">
                                <Price/>
                            </div>
                        </div>

                    
                </div>
            );
        }

    }

export default Home;