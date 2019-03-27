import React, { Component } from 'react';
import Headers from '../Components/Header/Header';
import { Container } from 'react-bootstrap';
//import GridCollections from '../Components/GridCollections/GridCollections';
//import Information from '../Components/Info/Info';
//import Footer from '../Components/Footer/Footer';
//import MainFooter from '../Components/MainFooter/MainFooter';
//import Nav from '../Components/Nav/Nav';
import './Home.scss';
//import Subscription from '../Components/Subscription/Subscription';
//import Exhibit from '../Components/Exhibit/Exhibit';
//import Activity from '../Components/Activity/Activity';
//import Carousel from '../Components/Carousel/Carousel';







class Home extends Component {
    
    render () {

            return (
                <div id="container">
                <Headers/>
                    {/* <NavTest/> */}
                    {/* <GridCollections/> */}
                    {/* <Subscription/> */}
                    <div className="Page-col">
                        {/* <Carousel/> */}
                        <div className="Sidebar">
                            {/* <Exhibit/>
                            <Activity/> */}
                        </div>
                    </div>

                    {/* <MainFooter/> */}

                    
                </div>
            );
        }

    }

export default Home;