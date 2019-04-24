import React, { Component } from 'react';
import './Contact.scss';
import Navigation from '../../Components/Navigation/Navigation';
import ReactHtmlParser from 'react-html-parser';
import Footer from '../../Components/Footer/Footer';
//import Loading from '../Loading/Loading';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {
                title: {
                    rendered: ''
                },
                content: {
                    rendered: ''
                }
            },
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
        var content = items.content.rendered;
        
        
        
        if (!isLoaded) {
           return <h4>Data är inte laddad. Läser in</h4>
        } else {
            return (
                <div className="contact">
                    
                            <div className="contact-header">
                                <Navigation/>
                                <div className="caption">
                                    <h4>Du hittar oss på Kvarngatan 25,200 meter från Eslövs station</h4>
                                </div>
                            </div>{/* contact-header */}

                        <div className="main-content">
                        
                            
                        <h4 className="title">{items.title.rendered}</h4>
<div className="column1">
                                    <div className="opening-time">
                                        <h5>Öppettid</h5>
                                        <p>onsdag - lödag kl.12 - 16</p>
                                    </div>

                                    <div className="price">
                                        <h5>Pris</h5>
                                        <p>Vuxna 60 SEK</p>
                                        <p>Barn och ungdom (5-15 år) 30 SEK</p>
                                    </div>
                                    </div>
                                <div className="column2">
                                    <div className="contact-us">
                                        <h5>Kontakta oss</h5>
                                        <p>Telefon: 0413-149 90 eller 0738-29 48 40</p>
                                        <p>Mail: info@eslovsleksakmuseum.se</p>
                                    </div>
                                    

                                    

                                    <div className="address">
                                        <h5>Adress</h5>
                                        <p>Kvarngatan 25</p>
                                        { ReactHtmlParser(content)}
                                    </div>
                                    </div>
                                
                            

                    </div>{/*Main-content*/}
                   
                            <Footer />
                        
                </div>
                 
            );
        } //else
       
    } //render()
}

export default Contact;