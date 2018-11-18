import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    _onClick = (e) => {
        const form = document.getElementsByClassName("Form")[0];
        if (e.target.classList.contains("Form"))
        form.style.display = "none";
    };
    render() {
        return (
            <div className="Form" onClick={this._onClick}>
                <div className="Form-window">
                    <h2>Хотите узнать подробнее о нас?</h2>
                    <h3>Будем рады обратной связи!<br/> Нужно только заполнить форму ниже.</h3>
                    <div className="Form-input">Имя</div>
                    <div className="Form-input">Компания</div>
                    <div className="Form-input">Телефон</div>
                    <div className="Form-input">Email</div>
                    <div className="Form-button">Оставить заявку</div>
                </div>
            </div>
        );
    }
}

export default Form;
