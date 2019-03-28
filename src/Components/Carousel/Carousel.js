import React, { Component } from 'react';
import './Carousel.scss';
import Img1 from '../../img/Barbie.jpg';
import Img2 from '../../img/Lego2.jpg';
import Img3 from '../../img/Playmobil.jpg';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


class Slideshow extends Component {
    
    render (){

        return(
            <div className="Slide">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={ Img1 } 
      alt="First slide"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={ Img2 } 
      alt="Second slide"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={ Img3 } 
      alt="Third slide"/>
                    </Carousel.Item> 

                </Carousel>

                <div className="Caption-Slide">
                    <p>Eslövs Leksaksmuseum är ett museum för både gamla och unga. Här finns leksaker som var populära på 50-talet men även dagens populära plastleksaker där film- och TV-figurer är förebilden. Här finns också 1 500 Lego-satser. Templet Taj Majhal är byggt med tusentals Lego-bitar, och är en av många sevärdheter.</p>
                </div>

                <div className="Slide-button">
                <NavLink to="/galleri"><p>Galleri</p></NavLink>
                </div>

            </div>
        
        )
    }
}

export default Slideshow;