import React, { Component } from 'react';
import Headers from '../Components/Header/Header';
import './Home.scss';
import Review from '../Components/Reviews/Reviews';
import Collections from '../Components/Collections/Collections';
import TrainCollection from '../Components/TrainCollections/TrainCollections';
import OpeningTime from '../Components/OpeningTime/OpeningTime';
import Price from '../Components/Price/Price';
import Subscription from '../Components/Subscription/Subscription';
import Carousel from '../Components/Carousel/Carousel';
import Exhibit from '../Components/Exhitbit/Exhibit';
import Activity from '../Components/Activity/Activity';
import MainFooter from '../Components/Footer/Footer';








class Home extends Component {
    
    render () {

            return (
                <div id="home">
                    
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
                        {/* Grid1 */}

                        <Subscription/>

                        <div className="Page-col">
                        <Carousel/>
                            <div className="Sidebar">
                                <Exhibit/>
                                <Activity/>
                            </div>
                        </div>

                        <MainFooter/>
               </div>

                
            );
        }

    }

export default Home;