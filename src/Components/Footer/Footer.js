import React, { Component } from 'react';
import './Footer.scss';


class MainFooter extends Component {
    render (){
        return (
            <div className="footer">
                <div className="socialMedia">
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-facebook-square"></i>
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