import React, { Component } from 'react';
import './SocialProof.css';

import logo1 from "./l1.png"
import logo2 from "./l2.png"
import logo3 from "./l3.png"
import logo4 from "./l4.png"
import logo5 from "./l5.jpg"
import logo6 from "./l6.png"
import logo7 from "./l7.png"
import logo8 from "./l8.jpg"
import logo9 from "./l8.png"
import logo10 from "./l10.png"
import logo11 from "./l11.png"
import logo12 from "./l12.png"

import doc1 from "./d1.png"
import doc2 from "./d2.png"
import doc3 from "./d3.png"

class SocialProofItem extends Component {
    render() {
        return (
            <div className="SocialProofItem">
                <h2>{this.props.title}</h2>
                <div>
                {
                        this.props.items.map(function (item, index) {
                        return <img key={index} src={item}/>
                        })
                }
                </div>
            </div>
        );
    }
}

class SocialProof extends Component {
    constructor() {
        super();
        this.partners = [doc1, doc2, doc3];
        this.clients = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12];
    }
    render() {
        return (
            <div className="SocialProof">
                <div className="SocialProofItems">
                    <SocialProofItem title="Любим все электронное, документооборот тоже:" items={this.partners}></SocialProofItem>
                    <SocialProofItem title="Нам доверяют:" items={this.clients}></SocialProofItem>
                </div>
            </div>
        );
    }
}

export default SocialProof;
