import React, {Component} from 'react';
import './Tarif.css';
import mac from './mac.png';

class Tarif extends Component {
    _onClick = () => {
        const form = document.getElementsByClassName("Form")[0];
        form.style.display = "flex"
    };
    render() {
        return (
            <div className="Tarif">
                <div className="Tarif-column Tarif-column-left">
                    <img src={mac} className="Tarif-image" alt="mac"/>
                </div>
                <div className="Tarif-column Tarif-column-right">
                    <div className="Tarif-text-wrapper">
                        <h2>Выберите персональный тарифный план уже сейчас</h2>
                        <p>Каждый элемент функционала приложения включается в Ваш пакет отдельно, исключительно по
                            Вашему желанию.</p>
                        <p>А чтобы помочь Вам определиться с выбором мы предоставляем <b>бесплатную полную версию
                            приложения на один месяц! </b></p>
                        <div className="Tarif-button" onClick={this._onClick}>Связаться с оператором</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tarif;
