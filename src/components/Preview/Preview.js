import React, { Component } from 'react';
import './Preview.css';
import mac from './mac.png';

class Preview extends Component {
    _onClick = () => {
        const form = document.getElementsByClassName("Form")[0];
        form.style.display = "flex"
    };
    render() {
        return (
            <div className="Preview">
                <div className="Preview-column Preview-column-left">
                    <div className="Preview-text-wrapper">
                        <h2 className="Preview-header">Бизнес-тревел,<br/> который работает</h2>
                        <p className="Preview-text">Множество услуг по лучшим ценам для вашего бизнеса.</p>
                        <div className="Preview-button" onClick={this._onClick}>Попробовать бесплатно</div>
                        <small>Полноценная пробная версия продукта предоставляется бесплатно на 1 месяц.</small>
                    </div>
                </div>
                <div className="Preview-column Preview-column-right">
                    <img src={mac} className="Preview-image" alt="mac" />
                </div>
            </div>
        );
    }
}

export default Preview;
