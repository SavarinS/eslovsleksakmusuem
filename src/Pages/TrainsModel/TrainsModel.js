import React, { Component } from 'react';
import './TrainsModel.scss';
import MainFooter from '../../Components/Footer/Footer';
import Navigation from '../../Components/Navigation/Navigation';
import Gallery from '../../Components/Gallery/Gallery';
import ReactHtmlParser from 'react-html-parser';




class TrainsModel extends Component {
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
            fetch('https://eslovsleksakmuseum.beehiveinthewood.one/wp-json/wp/v2/pages/1906?_embed=true') //fetch method - link that want to fetch data
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
                <div className="trainsModel">
                    
                        <div className="train-header">
                            <Navigation/>

                            <div className="caption">
                                <h4>"Det finns cirka 500 meter räls i ett landskap med 660 hus, där den bereste hittar många kända miljöer. Tågen dra sav cirka 250 lok, från 50-talsmodeller till dagens snabbtåg. 600 vagnar."</h4>
                            </div>
                        </div>

                        <div className="main-content">
                        
                            
                                <h4>{items.title.rendered}</h4>
                                <p className="train-desc"><p>{ ReactHtmlParser(content)}</p></p>

                        
                        </div>{/*TrainsModel-content*/}
                        <Gallery/>
                    
                    <MainFooter/>
            </div> 
            
            );
        } //else
       
    } //render()
}

export default TrainsModel;