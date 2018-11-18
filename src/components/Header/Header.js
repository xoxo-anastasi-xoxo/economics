import React, { Component } from 'react';
import logo from './paxport_logo.png';
import './Header.css';

class Header extends Component {
    _onClick = () => {
      const form = document.getElementsByClassName("Form")[0];
      form.style.display = "flex"
    };

    render() {
        return (
            <div className="Header">

                <div className="Header-logo">
                    <img src={logo} className="Header-logo" alt="logo" />
                </div>

                <div className="Header-menu-wrapper">
                    <div className="Header-menu">О нас</div>
                    <div className="Header-menu">Контакты</div>
                    <div className="Header-button" onClick={this._onClick}>Начать работу</div>
                </div>
            </div>
        );
    }
}

export default Header;
