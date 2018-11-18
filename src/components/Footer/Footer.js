import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div>
                    {/*<img src={logo}/>*/}
                    <p className="special"><br/><br/><br/><br/>
                        © Все права защищены. Paxport Corporate LLC
                    </p>
                </div>
                <div>
                    <p><br/>+7(495)374-63-94<br/>
                        +7(800)500-75-69<br/><br/>
                        corp@paxport.ru</p>
                </div>
            </div>
        );
    }
}

export default Footer;
