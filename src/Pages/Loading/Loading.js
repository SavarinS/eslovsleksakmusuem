import React, { Component } from 'react';
import './Loading.scss';

class Loading extends Component {
    render (){
        return (
            <div className="loading">
                <h4>Data är inte laddad. Läser in</h4>
                <i class="fas fa-spinner"></i>
            </div>
        )
    }
}

export default Loading;