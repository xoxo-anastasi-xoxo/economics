import React, { Component } from 'react';
import './Services.css';
import background from './komandirovka2.jpg';

class Services extends Component {
    render() {
        return (
            <div className="Services parallax">
                <img src={background} alt="background"/>
                <span className="Services-overlayed"></span>
                </div>
        );
    }
}

export default Services;
