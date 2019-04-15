import React, { Component } from 'react';
import './Review.scss';


class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false, //if the items is loaded
        }
    }
    // life cycle method
    componentDidMount(){
        fetch('https://eslovsleksakmuseum.beehiveinthewood.one/wp-json/wp/v2/posts?categories=187', {
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
            }
             
        }) //fetch method - link that want to fetch data
        //'https://jsonplaceholder.typicode.com/users'
            .then(res => res.json()) //get the result and transform it to Json format
            .then(json => { //create error function  
                this.setState({ 
                    isLoaded: true,
                    items: json, //data from fetch

                })
            });
            
}
    render (){
        var { isLoaded } = this.state; // can access to isLoaded and items in constructor method 
        
        if (!isLoaded) {
           return <div> Data is not loaded. Loading ...</div>;
        } else {
            
            return (
                <div className="Reviews">
                    <h4>Vad tycker besökarna</h4>
                    <div className="Review-col">
                {this.state.items.map (review => {
                    return (
                        
                            <div className="Review" key={review.id}>
                                    <i className="fa fa-user-circle"></i>
                                    <div className="Review-title">
    
                                        <h5>{review.title.rendered}</h5>
                                    </div>
                                    <div className="Review-content">
                                        <p>{review.excerpt.rendered}</p>
                                    </div>
                                </div>
                            
                    ) // end return
                })} 
                </div>
                
                    
                </div>
            );
        }
    }
}

export default Review;