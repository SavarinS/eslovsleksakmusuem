import React, { Component } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';




class Header extends Component {
    constructor(props){
        super(props);

        let show = new Date()
        
        this.state = {
            
            hour: show.getHours(),
            minutes: show.getMinutes() ,
            day: show.getDay()
            
            
        };
        
    }
    

    render () {

        const days = ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"]

        
        //&& this.state.hour > 12 && this.state.hour === 16

        //If it's open on Wednesday and Saturday 12-16
        if(this.state.day >= 3 && this.state.day <= 7 && this.state.hour >= 12 && this.state.hour <= 16){
            
            return (
                    
                    <div className="header">
                        <Navigation/>
                            <div className="hero-image">
                                <div className="hero-text">
                                    <h4>Drömmer du också om att bli barn på nytt!</h4>
                                    <h4>Välkomen till</h4>
                                    <h3>Eslöv Leksakmusuem</h3>
                                    
                                    <div className="show-info">
                                        
                                        <h4>Idag är {days[this.state.day]} och vi öppnar fram till 16.00</h4>
                                        {/* <h2>{this.state.hour >= 15 ? 'Vi stänger om en timmer' : null }</h2> */}
                                        <div className="info-button">
                                            <NavLink to="Kontakt">Hitta oss</NavLink>
                                        </div>
                                
                                        
                                    </div>
                                </div>
                            </div>
                    </div>
            )
        } else {
            // console.log("Today is" + ' ' + dateTime + ' ' + " and sorry, we are close.");
            return (
               
                    <div className="header">
                                <Navigation/>
                            <div className="hero-image">
                                <div className="hero-text">
                                    <h4>Drömmer du också om att bli barn på nytt!</h4>
                                    <h4>Välkomen till</h4>
                                    <h3>Eslöv Leksakmusuem</h3>
                                    {/* <h1>It's now {this.state.hour} : {this.state.minutes}</h1> */}
                                    <div className="show-info">
                                        <h4 className="day">Idag är {days[this.state.day]} och vi stänger.</h4>

                                        <div className="info-button">
                                            <NavLink to="Kontakt">Öppettid</NavLink>
                                        </div>

                                    </div>
                                </div>
                            </div>
                    </div>
            )
        }

       
    }
}

export default Header;