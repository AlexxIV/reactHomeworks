import React, { Component } from 'react';

class AddPokemonForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {}
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (e) {
        const name = e.target.dataset.name;
        const value = e.target.value;
        const newObj = {};
        newObj[name] = value;
        this.setState({
            form: Object.assign(this.state.form, newObj)
        });
    }

    handleSubmit = (e) => {
        // e.preventDefault();
        fetch('http://localhost:5000/pokedex/create', 
            {  
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(data => data.json())
        .then(response => {
              this.props.updatePokemonRoster(response)
        })
        .catch (err => console.log(err))
    }

    render() {
        return (
            <div className="form-wrapper">
            <h1>Create Pokemon</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="input-pokename">Pokemon Name</label>
                        <input data-name="pokemonName" type="text" onChange={this.handleChange} className="form-control" id="input-pokename" placeholder="Pokemon Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-pokeImg">Pokemon Image</label>
                        <input data-name="pokemonImg" type="text" onChange={this.handleChange} className="form-control" id="input-pokeImg" placeholder="Pokemon Image" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-password">Pokemon Info</label>
                        <input data-name="pokemonInfo" type="text" onChange={this.handleChange} className="form-control" id="input-pokeInfo" placeholder="Pokemon Info" />
                    </div>
                    <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddPokemonForm;