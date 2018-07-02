import React, { Component } from 'react';

class Roster extends Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        const images = this.props.images.map(i => {
            <div key={i.id} className='roster-...'>
                <img src={i.url} alt="image" />
            </div>
        })
        return (
            <section id="roster">
                {images}
            </section>
        )
    }
}

export default Roster