import React, { Component } from 'react';
import './Exhibit.scss';
//import Stad from './staden.jpg';


class Exhibit extends Component {
    
    render (){
        
            return (
                    <div className="Exhibit">
                        
                        <div className="Exhibit-title">
                        <i className="fa fa-calendar-alt"></i>
                            <h5>Utställningar</h5>
                        </div>

                        <div className="Exhibit-content">
                            
                            <div className="E-title">
                            <p>8 mars 2019 - 30 juli 2019</p>
                            <p>Barbie - pionjär bland actionfigurer</p>
                        
                            </div>
                            
                            
                        </div>
                        
                    </div>
                )
               
            }
}

export default Exhibit;