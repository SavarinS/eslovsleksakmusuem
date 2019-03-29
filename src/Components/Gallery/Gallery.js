import React, { Component } from 'react';
//import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import './Gallery.scss';
import Pic1 from '../../img/Trains/Marklin_BMW2.jpg';
import Pic2 from '../../img/Trains/Marklin_bondgard_o_strand.jpg';
import Pic3 from '../../img/Trains/Marklin_brinner.jpg';
import Pic4 from '../../img/Trains/Marklin_fotboll.jpg';
import Pic5 from '../../img/Trains/Marklin_gata.jpg';
import Pic6 from '../../img/Trains/Marklin_gocart.jpg';
import Pic7 from '../../img/Trains/Marklin_karusell.jpg';
import Pic8 from '../../img/Trains/Marklin_kliniken2.jpg';
import Pic9 from '../../img/Trains/Marklin_kolla1.jpg';
import Pic10 from '../../img/Trains/Marklin_kyrkan.jpg';

class Gallery extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
          items: [],
            isLoaded: false, //if the items is loaded
        
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

      // life cycle method
    componentDidMount(){
        fetch('https://eslovsleksakmuseum.beehiveinthewood.one/wp-json/wp/v2/media?_embed=true') //fetch method - link that want to fetch data
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
            <div className="train-model-gallery">

        {/* <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button> */}

                <div className="gallery">
                    <img src={ Pic1 } alt="Marklin_BMW2" onClick={this.handleShow} />

                </div>
                <div className="gallery">
                    <img src={ Pic2 } alt="Marklin_bondgard" onClick={this.handleShow} />
                </div>
                <div className="gallery">
                    <img src={ Pic3 } alt="Marklin_bondgard" onClick={this.handleShow} />
                </div>
                <div className="gallery">
                    <img src={ Pic4 } alt="Marklin_bondgard" onClick={this.handleShow} />
                </div>

                <div className="gallery">
                    <img src={ Pic5 } alt="Marklin_bondgard" onClick={this.handleShow} />
                </div>
                <div className="gallery">
                    <img src={ Pic6 } alt="Marklin_bondgard" onClick={this.handleShow} />
                </div>

                <div className="gallery">
                    <img src={ Pic7 } alt="Marklin_bondgard" onClick={this.handleShow} />
                </div>
                <div className="gallery">
                    <img src={ Pic8 } alt="Marklin_bondgard" onClick={this.handleShow} />
                </div>
                <div className="gallery">
                    <img src={ Pic9 } alt="Marklin_bondgard" onClick={this.handleShow} />
                </div>
                <div className="gallery">
                    <img src={ Pic10 } alt="Marklin_bondgard" onClick={this.handleShow} />
                </div>

                {/* <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
          <img src={ Pic10 } alt="Marklin_BMW2" onClick={this.handleShow} />
          </Modal.Body>
          
        </Modal>

        <Container>
            
            { this.state.items.map(media => {
                                return (
                                    <div>
                                        <Row>
                <Col sm>{media.guid.rendered}</Col>
                
                </Row>
                </div>
                                )
                            })}
            
        </Container> */}

      
        
      </div>
        );
    }
}
}

export default Gallery;