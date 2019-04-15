import React, { Component } from 'react';
import './NotFound.scss';
import Train from '../../img/Train-notFound.png';
import { NavLink } from 'react-router-dom';


class NotFound extends Component {
    render(){
        return(
            <div className="not-found">
                
                <section className="NotFound-content">
                    <h2>Opps! Sidan kan inte hittas.</h2>
                    <h3>Det verkar som om du tog fel tåg</h3>

                    <div className="img-train">
                        <img src={Train} alt="Not found img"/>
                    </div>
                    
                    <div className="NotFound-sub">
                    <NavLink to="/"><p>Till musuems hemsida</p></NavLink>
                    <NavLink to="/kontakt"><p>Kontakta oss</p></NavLink>
                        
                    </div>
                    
                </section>
                
                
            </div>
        );
    }
}

export default NotFound;