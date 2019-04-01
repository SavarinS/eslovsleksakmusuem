import React, { Component } from 'react';
import './Contact.scss';
import Navigation from '../../Components/Navigation/Navigation';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false, //if the items is loaded
        }
    }

    // life cycle method
    componentDidMount(){
        fetch('https://eslovsleksakmuseum.beehiveinthewood.one/wp-json/wp/v2/pages/1908?_embed=true') //fetch method - link that want to fetch data
        //'https://jsonplaceholder.typicode.com/users'
            .then(res => res.json()) //get the result and transform it to Json format
            .then(json => { //create error function  
                this.setState({ 
                    isLoaded: true,
                    items: json, //data from fetch

                })
            });
}
    render() {
        var { isLoaded, items } = this.state; // can access to isLoaded and items in constructor method 
        
        
        if (!isLoaded) {
           return <div> Data is not loaded. Loading ...</div>;
        } else {
            return (
                <div className="contact-page">
                    <div className="main-content">
                        <div className="contact-nav">
                        <Navigation/>
                            <div className="caption">
                            
                            </div>
                        </div>
                    
                        
                        <div className="contact-content">
                           
                            {/* <h1> Data has been loaded. </h1> */}
                            <div className="contact-title">
                                <h1>{items.title.rendered}</h1>
                            </div>

                            <div className="column">
                                <div className="col-1">
                                    <div className="opening-time">
                                        <h2>Öppettid</h2>
                                        <p></p>
                                    </div>

                                    <div className="price">
                                        <h2>Pris</h2>
                                        <p></p>
                                    </div>
                                    
                                    <div className="contact-us">
                                        <h2>Kontakta oss</h2>
                                        <p></p>
                                        <p></p>
                                    </div>
                                </div>

                                <div className="col-2">

                                    

                                    <div className="address">
                                        <h2>Adress</h2>
                                        <p></p>
                                    </div>
                                </div>
                            </div>

                    
                            
                        </div> {/*Contact-content*/}
                    </div>{/*Main-content*/}
                </div> 
            );
        } //else
       
    } //render()
}

export default Contact;