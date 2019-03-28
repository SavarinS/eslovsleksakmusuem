import React, { Component } from 'react';
import './About.scss';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import Partners from '../../Components/Partners/Partners';




class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false, //if the items is loaded
        }
    }
// life cycle method
    componentDidMount(){
            fetch( 'https://eslovsleksakmuseum.beehiveinthewood.one/wp-json/wp/v2/pages/1904?_embed=true') //fetch method - link that want to fetch data
            //'https://jsonplaceholder.typicode.com/users'
                
                .then(res => res.json()) //get the result and transform it to Json format
                .then(json => { //create error function  
                    this.setState({ 
                        isLoaded: true,
                        items: json, //data from fetch

                    })
                })
                .catch(function(error) {
                    console.log('Request failed', error)
                });
                
    }

    render() {
        var { isLoaded, items } = this.state; // can access to isLoaded and items in constructor method 
        
     
        
        
        if (!isLoaded) {
           return <div> Data is not loaded. Loading ...</div>;
        } else {
            return (
                <div className="About-page">
                <div className="About-nav">
                <Navigation/>
                <div className="caption">
                <h3>"Vi är familjen Sundberg och har samlat på leksakerna sedan 195o-talet.</h3>
                </div>
                </div>
                    <div className="Main-content">
                        
                        <div className="About-content">
                                <h1>{items.title.rendered}</h1>
                                <div className="content1">
                                    <div className="content-row">
                                        <p>{items.content.rendered}</p>
                                    </div>
                                    <div className="content-row">
                                <img src={items._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Feature"/> 
                                </div>
                                </div>
                                
                            </div> {/*About-content*/}
                            <Partners/>
                    </div>{/*Main-content*/}
               <Footer/>
                </div> 
            );
        } //else
       
    } //render()
}

export default About;