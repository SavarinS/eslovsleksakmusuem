import React, { Component } from 'react';

class Partners extends Component {
    render (){
        return (
            <div className="partners">
                <h3>Våra partners</h3>
                <div className="partners-list">
                    <div className="name">
                        <i class="fas fa-cat"></i>
                        <a href="https://www.leksaksmuseet.se/"><h5>Leksaksmuseet Stockholm</h5></a>
                    </div>
                    <div className="name">
                        <i class="fa fa-dog"></i>
                        <a href="https://bibliotek.eslov.se/web/arena">
                        <h5>Eslövs stadsbibliotek</h5></a>
                    </div>
                    <div className="name">
                        <i class="fas fa-hippo"></i>
                        <a href="https://eslov.se/uppleva-gora/idrott-motion-och-friluftsliv/simhallar-badhus/karlsrobadet/">
                        <h5>Karlsbadet</h5></a>
                    </div>
                    <div className="name">
                        <i class="fas fa-crow"></i>
                        <a href="https://erikshjalpen.se/store/eslov/">
                        <h5>Eslöv Erikshjälpen</h5></a>
                    </div>
                    <div className="name">
                        <i class="fas fa-fish"></i>
                        <a href="https://toyworld.se/">
                        <h5>Toy World i Helsingborg</h5></a>
                    </div>
                    <div className="name">
                        <i class="fas fa-frog"></i>
                        <a href="https://www.hembygd.se/eslof">
                        <h5>Eslövs stadmuseum</h5></a>
                    </div>

                    <div className="name">
                        <i class="fas fa-kiwi-bird"></i>
                        <a href="http://www.lekoseum.se/">
                        <h5>Osby Lekoseum</h5></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Partners;