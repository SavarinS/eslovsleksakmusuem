import React, { Component } from 'react';
import './About.scss';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import Partners from '../../Components/Partners/Partners';
import ReactHtmlParser from 'react-html-parser';




class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {
                title:{
                    rendered:''
                },
                content:{
                    rendered:''
                },
            },
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
        var about = items.content.rendered;
     
        
        
        if (!isLoaded) {
           return <div> Data is not loaded. Loading ...</div>;
        } else {
            return (
                <div className="about">
                    <div className="about-header">
                        <Navigation/>
                        <div className="caption">
                            <h2>"Vi är familjen Sundberg och har samlat på leksakerna sedan 195o-talet.</h2>
                        </div>
                    </div>
                    <div className="main-content">
                        
                        {/* <div className="About-content"> */}
                                <h2>{items.title.rendered}</h2>
                                <div className="content1">
                                    <div className="content-row">
                                        { ReactHtmlParser(about)}
                                    </div>
                                    <div className="content-row">
                                <img src={items._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Feature"/> 
                                </div>
                                </div>
                    </div>{/*Main-content*/}        
                            {/* </div> About-content */}
                            <Partners/>
                
               <Footer/>
                </div> 
            );
        } //else
       
    } //render()
}

export default About;