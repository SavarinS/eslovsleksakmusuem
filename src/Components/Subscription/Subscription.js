import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import './Subscription.scss';

class Subscription extends Component {
    render(){
        return (
            <div className="Subscription">
                <div className="Sub-header">
                    <h3>Registrear dig för nyhetsbrev</h3>
                </div>
                <div className="Sub-form">
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Namn</Form.Label>
                        <Form.Control type="email" placeholder="John Smith" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>E-post</Form.Label>
                        <Form.Control type="password" placeholder="John.Smith@gmail.com" />
                    </Form.Group>
                    <div className="Sub-button">
                        <button>Skicka</button>
                    </div>
                </Form>
                </div>                
            </div>
        )
    }
}

export default Subscription;