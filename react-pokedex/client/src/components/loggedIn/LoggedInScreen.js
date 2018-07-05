import React, { Component } from 'react';
import AddPokemonForm from './AddPokemonForm';
import Pokemon from './Pokemon';
import '../../css/LoggedInScreen.css';

class LoggedInScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokeArray: []
        };
    }

    updatePokemonRoster = (newRoster) => {
        this.setState({pokeArray: newRoster});
    }

    componentDidMount() {
        fetch('http://localhost:5000/pokedex/pokedex')
            .then(rawData => rawData.json())
            .then(pokemons => this.setState({pokeArray: pokemons.pokemonColection}))
    }

    render() {
        return (
            <div>
                <AddPokemonForm updatePokemonRoster={this.updatePokemonRoster}/>
                <div className="pokemon-wrapper">
                    {this.state.pokeArray.map((pokemon, index) => <Pokemon key={index} item={pokemon} />)}
                </div>
            </div>
        );
    }
}

export default LoggedInScreen;