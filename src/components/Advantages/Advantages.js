import React, {Component} from 'react';
import './Advantages.css';
import background from "./komandirovka6.jpg"
import logo1 from "./passanger.svg"
import logo2 from "./cloud (1).svg"
import logo3 from "./cloud (2).svg"
import logo4 from "./houses.svg"
import logo5 from "./money-bag.svg"

class AdvantagesItem extends Component {
    render() {
        return (
            <div className="AdvantagesItem">
                <div className="AdvantagesItem-icon">
                    <img src={this.props.icon}/>
                </div>
                <div className="AdvantagesItem-text-wrapper">
                    <div className="AdvantagesItem-title">{this.props.title}</div>
                    <div className="AdvantagesItem-text">{this.props.description}</div>
                </div>
            </div>
        );
    }
}

class Advantages extends Component {
    constructor() {
        super();
        this.items = [
            {
                icon: logo1,
                title: "Полноценное решение",
                description: "Мы ищем, бронируем, анализируем и готовим отчеты обо всем: полетах, отелях, затратах за время поездки."
            },
            {
                icon: logo5,
                title: "Максимум экономии",
                description: "Мы регулярно актуализируем предложения партнёров, чтобы предоставить Вам самые выгодные решения!"
            },
            {
                icon: logo2,
                title: "Поддержка 24/7",
                description: "Наша техническая поддержка работает круглосуточно семь дней в неделю на пяти континентах."
            },
            // {
            //     icon: logo6,
            //     title: "Изменение планов в один клик",
            //     description: "Мы берем на себя все изменения и отмены. Больше никаких звонков в отели и аэрокомпании."
            // },
            {
                icon: logo4,
                title: "Специальные предложения",
                description: "Мы максимизируем преимущества Вашей лояльности по всем видам поездок."
            },
            {
                icon: logo3,
                title: "Доступ с любого устройства",
                description: "Мы управляем Вашей поездкой через нашу облачную платформу, предоставляя полный доступ к ней через email, сайт и мобильные приложения."
            }
        ]
    }

    render() {
        return (
            <div className="Advantages parallax">
                <img src={background} alt="background"/>
                <span className="Advantages-overlayed">
                    <div className="Advantages-wrapper">
                    {
                        this.items.map(function (item, index) {
                            return <AdvantagesItem key={index} icon={item.icon} title={item.title}
                                                   description={item.description}/>
                        })
                    }
                    </div>
                </span>
            </div>
        );
    }
}

export default Advantages;
