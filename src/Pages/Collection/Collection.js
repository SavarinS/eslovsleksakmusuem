import React, { Component } from 'react';
import Footer from '../../Components/Footer/Footer';
import './Collection.scss';
import Navigation from '../../Components/Navigation/Navigation';



class Collections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false, //if the items is loaded
        }
    }
// life cycle method
    componentDidMount(){
            fetch('https://eslovsleksakmuseum.beehiveinthewood.one/wp-json/wp/v2/posts?_embed&categories=188') //fetch method - link that want to fetch data
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
           return <div> Data is not loaded. Loading ...</div>;
        } else {
            return (
                <div className="Collections-page">
                    <div className="Main-content">
                    <div className="Collection-nav">
                        <Navigation/>
                    </div>
                    <h1> Samligar </h1>
                        <div className="Collections-content">
                           
                            
                            { this.state.items.map(post => {
                                return (
                                    <div className="Collection-list">
                                        <div key={post.id} className="Collection-title">
                                            <h3>{post.title.rendered} </h3>
                                        </div>

                                        <div className="Collection-img">
                                            <div className="featureImage">
                                             {post.featured_media ? 
                                            
							 <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="Collection"/>
						: null}
                        </div>
                                        
                                        </div>

                                        <div className="Collection-desc">
                                            <p>{post.content.rendered} </p>
                                        </div>

                                        
                                    </div>
                                ) // end return
                            })}   
                        
                        </div>{/*Collections-content*/}
                    </div> {/*Main-content*/}
                    <div className="Main-footer">
                        <Footer />
                    </div>{/*Main-footer*/}
            </div> 
            
            );
        } //else
       
    } //render()
}

export default Collections;