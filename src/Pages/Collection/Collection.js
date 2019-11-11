import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import './Collection.scss';
import Navigation from '../../Components/Navigation/Navigation';
import ReactHtmlParser from 'react-html-parser';



class Collections extends Component {
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
            fetch('https://leksakmuseum.beehiveinthewood.one/wp-json/wp/v2/posts?_embed&categories=5') //fetch method - link that want to fetch data
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
        var { isLoaded } = this.state; // can access to isLoaded and items in constructor method 
        

        if (!isLoaded) {
           return <div> <p>Page is loading. Please wait.</p></div>;
        } else {
            return (
                <div className="collections">
                    
                        <div className="collections-header">
                            <Navigation/>

                            <div className="caption">
                                <h4>500 meter modelljärnväg, 400 Barbiedockor, 4 000 modellbilar, 9 000 tennsoldater och 1 500 uppbyggda Legosatser.</h4>
                            </div>
                        </div>
                        {/* collections-header */}
                        <div className="main-collections-content">
                        
                            <h4> Samligar </h4>
                        
                    
                        <div className="collections-content">
                        
                            
                            { this.state.items.map(post => {
                                return (
                                    <div key={post.id} className="collection-list">
                                        <div className="collection-row">
                                            <div className="title">
                                                <h5>{post.title.rendered} </h5>
                                            </div>

                                            <div className="collection-desc">
                                                { ReactHtmlParser(post.content.rendered)}
                                            </div>
                                        </div>

                                        <div className="collection-img">
                                
                                             {post.featured_media ? 
                                            
							                    <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Collection"/>
						                        : null}
                                            
                                        
                                        </div>

                                        

                                        
                                    </div>
                                ) // end return
                            })}   
                        
                        </div>{/*Collections-content*/}
                    </div> 

                        <Footer />
                    
            </div> 
            
            );
        } //else
       
    } //render()
}

export default Collections;