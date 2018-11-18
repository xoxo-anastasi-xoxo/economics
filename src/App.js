import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Preview from "./components/Preview/Preview";
import Advantages from "./components/Advantages/Advantages";
import Services from "./components/Services/Services";
import Carousel from "./components/Carousel/Carousel";
import Notebook from "./components/Notebook/Notebook";
import Footer from "./components/Footer/Footer";
import SocialProof from "./components/SocialProof/SocialProof";
import Tarif from "./components/Tarif/Tarif";
import Form from "./components/Form/Form";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Preview/>
                <Carousel/>
                <Advantages/>
                <Tarif/>
                <SocialProof/>
                <Notebook/>
                <Footer/>
                <Form/>
            </div>
        );
    }
}

export default App;
