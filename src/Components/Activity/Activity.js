import React, { Component } from 'react';
import './Activity.scss';
//import Markus from './markus.jpg';


class Activity extends Component {
    
    render (){
        
            return (
                    <div className="Activity">
                        
                        <div className="Activity-title">
                        <i className="fa fa-cubes"></i>
                            <h5>Aktiviteter</h5>
                        </div>
                        <div className="Activity-content">
                            
                            <p>Den 1 Juni kl.10. Temat 'Fancy Planting' och sagor.</p>
                            <p>Varje torsdag kl.15 - 17. Eftermiddagsmys för barn</p>
                        </div>
                        
                    </div>
                )
               
            }
}

export default Activity;