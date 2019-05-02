import React, { Component } from 'react';
import './Footer.scss';


class MainFooter extends Component {
    render (){
        return (
            <div className="footer">
                <div className="socialMedia">
                    <a href="https://www.youtube.com/watch?v=bnaWtRkVkIg"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.facebook.com/pages/Esl%C3%B6vs-Leksaksmuseum/196198213751464"><i className="fab fa-facebook-square"></i></a>
                </div>
                <div className="footer-contact">
                    <p>Telefon: 0413-149 90 eller 0738-29 48 40</p>
                    <p>Mail: info@eslovsleksaksmuseum.se</p>
                </div>
                
                   
                

            </div>
        )
    }
}

export default MainFooter;