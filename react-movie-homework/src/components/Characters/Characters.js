import React, { Component } from 'react';

import Roster from './Roster';
import Details from './Details';
import fetcher from '../../fetcher';

const ROSTER_ENPOINT = '/roster';
const DETAILS_ENDPOINT = '/character/';

class Characters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            details: {
                name: null,
                id: null,
                url: null,
                bio: null
            }
        }
    }

    componentDidMount = () => this.fetchRoster();

    mapImages = data => ({ id: data.id, url: data.url }); 

    fetchRoster = () => 
        fetcher.get(ROSTER_ENPOINT, data => this.setState(this.mapImages(data)));

    render = () => (
            <div>
                <Roster images={this.state.images} />
                <Details {...this.state.details} />
            </div>
        )
}

export default Characters