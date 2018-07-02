import React, { Component } from 'react';

class Details extends Component {
    render = () => (
            <section id="bio">
                <div className="image">
                    <img src={this.props.url} />
                </div>
                <div className="info">
                    <p>Name: <strong>{this.props.name}</strong></p>
                    <p>Bio: {this.props.bio}</p>
                    <p></p>
                </div>
            </section>
        )
}

export default Details