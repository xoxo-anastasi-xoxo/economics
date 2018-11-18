import React, { Component } from 'react';
import './Notebook.css';
import city from './city3.svg'

class Notebook extends Component {
    _onClick = () => {
        const form = document.getElementsByClassName("Form")[0];
        form.style.display = "flex"
    };
    render() {
        return (
            <div className="Notebook">
                <div  className="Notebook-pretop"></div>
                <img className="Notebook-top" src={city}/>
                <div  className="Notebook-bottom"></div>
                <div className="Notebook-center"></div>
                <div className="Notebook-text-wrapper">
                    <h2 className="Notebook-title">Простое облачное управление поездками</h2>
                    <p className="Notebook-text">Бронируй и контролируй все аспекты в одном приложении.</p>
                    <div className="Notebook-button" onClick={this._onClick}>Начать работу</div>
                </div>
            </div>
        );
    }
}

export default Notebook;
