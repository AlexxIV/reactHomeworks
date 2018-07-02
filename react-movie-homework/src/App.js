import React, { Component } from 'react';
import './css/App.css';

import Slider from './components/Slider/Slider';
import Characters from './components/Characters/Characters';


class App extends Component {
    constructor() {
        super()

        this.state = {
            epOnFocus : 0
        }

        this.changeEp = (ep) => {
            this.setState({epOnFocus : ep})
        }
    }

    render() {
        return (
            <div className='container'>
                <Slider />
                <Characters />
            </div> 
        )
    }
}

export default App;
