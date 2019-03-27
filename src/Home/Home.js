import React, { Component } from 'react';
import Headers from '../Components/Header/Header';

//import GridCollections from '../Components/GridCollections/GridCollections';
//import Information from '../Components/Info/Info';
//import Footer from '../Components/Footer/Footer';
//import MainFooter from '../Components/MainFooter/MainFooter';
//import Nav from '../Components/Nav/Nav';
import './Home.scss';
import Review from '../Components/Reviews/Reviews';
import Collections from '../Components/Collections/Collections';
import TrainCollection from '../Components/TrainCollections/TrainCollections';
//import Subscription from '../Components/Subscription/Subscription';
//import Exhibit from '../Components/Exhibit/Exhibit';
//import Activity from '../Components/Activity/Activity';
//import Carousel from '../Components/Carousel/Carousel';







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
                                {/* <OpeningTime/> */}
                                
                            </div>

                            <div className="column">
                                {/* <Price/> */}
                            </div>
                        </div>

                    
                </div>
            );
        }

    }

export default Home;