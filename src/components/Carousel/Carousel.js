import React, {Component} from 'react';
import './Carousel.css';
import img1 from "./smartmockups_jmd7b3o.png"
import img2 from "./smartmockups_jmd30ul.png"
import img3 from "./smartmockups_jmdddb0.png"
import img4 from "./smartmockups_jmddu00.png"

class Carousel extends Component {
    render() {
        return (
            <div className="Carousel">
                <div className="Carousel-images">
                    <img src={img4} alt="logo"/>
                    <img src={img3} alt="logo"/>
                    <img src={img2} alt="logo"/>
                    <img src={img1} alt="logo"/>
                </div>
                <div className="Carousel-text-wrapper">
                    <h2 className="Carousel-header">Paxport упростит:</h2>
                    <p className="Carousel-title">Бронирование и отказ от брони</p>
                    <p className="Carousel-text">Мы предоставим самые выгодные решения и возьмем на себя все брони, изменения и отмены. Больше никаких звонков в отели и аэрокомпании.</p>

                    <p className="Carousel-title">Управление поездкой</p>
                    <p className="Carousel-text">Бронируйте для себя и для коллег. А мы визуализируем этапы бизнесс-поездки и наглядно покажем, на каком этапе Вы сейчас.</p>

                    <p className="Carousel-title">Формирование отчетности</p>
                    <p className="Carousel-text">Всю информацию о поездках можно конвертировать в самые востребованные форматы бухгалтерской отчетности. Достаточно указать какой и сохранить его в шаблоны.</p>
                </div>
            </div>
        );
    }
}

export default Carousel;
