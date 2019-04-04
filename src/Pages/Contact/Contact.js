import React, { Component } from 'react';
import './Contact.scss';
import Navigation from '../../Components/Navigation/Navigation';
import ReactHtmlParser from 'react-html-parser';
import Footer from '../../Components/Footer/Footer';


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
           return <div> Data is not loaded. Loading ...</div>;
        } else {
            return (
                <div className="contact-page">
                    <div className="main-content">
                            <div className="contact-nav">
                                <Navigation/>
                                <div className="caption">
                                    <h3>Du hittar oss på Kvarngatan 25,200 meter från Eslövs station</h3>
                                </div>
                            </div>{/* contact-nav */}
                        
                        <div className="contact-content">
                           
                            <div className="contact-desc">
                                <div className="contact-title">
                                    <h1>{items.title.rendered}</h1>
                                </div>
                                <div className="contact-info">
                                    { ReactHtmlParser(content)}
                                </div>
                            </div>{/* contact-desc */}
                            

                            <div className="column">
                                <div className="column-1">
                                    <div className="opening-time">
                                        <h2>Öppettid</h2>
                                        <p>onsdag - lödag kl.12 - 16</p>
                                    </div>

                                    <div className="price">
                                        <h2>Pris</h2>
                                        <p>Vuxna 60 SEK</p>
                                        <p>Barn och ungdom (5-15 år) 30 SEK</p>
                                    </div>
                                    
                                    <div className="contact-us">
                                        <h2>Kontakta oss</h2>
                                        <p>Telefon: 0413-149 90 eller 0738-29 48 40</p>
                                        <p>Mail: info@eslovsleksakmuseum.se</p>
                                    </div>
                                </div>{/* column-1 */}

                                <div className="column-2">

                                    <div className="address">
                                        <h2>Adress</h2>
                                        <p>Kvarngatan 25</p>
                                        <p>Bilparkering finns det ca 200 meter bort. Stadsbussen, linje 3 stannar 100 meter från oss.

                                        Enklast tar du tåget till Eslöv om du inte bor i stan, då har du bara 2 minuters gångväg till oss från stationen. Välj den östra uppfarten i tunneln (mot ICA) sedan går du bara rakt fram, sen vänster så är du hos oss.

                                        Museets entrévåning med huvudutställning innehållande bla.a den stora Märklinbanan, Playmobilutställning, bilar samt dockor är handikappanpassat men…
                                        de senast öppnade avdelningarna i källaren har en trappa ner och det saknas hiss dit!</p>
                                    </div>
                                </div>{/* column-2 */}
                            </div> {/* column */}

                    
                            
                        </div> {/*Contact-content*/}

                        
                    </div>{/*Main-content*/}
                    <div className="Main-footer">
                            <Footer />
                        </div>{/*Main-footer*/}
                </div>
                 
            );
        } //else
       
    } //render()
}

export default Contact;