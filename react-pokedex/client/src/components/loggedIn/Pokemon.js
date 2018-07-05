import React, { Component } from 'react';
import '../../css/Pokemon.css';

class Pokemon extends Component {
    render() {
        return (
            <div className="single-pokemon">
                <h1>{this.props.item.pokemonName}</h1>
                <p>{this.props.item.pokemonInfo}</p>
                <img src={this.props.item.pokemonImg} alt={this.props.item.pokemonInfo} />
            </div>
        )
    }
}

export default Pokemon;