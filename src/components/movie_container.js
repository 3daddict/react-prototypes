import React, { Component } from 'react';
import Axios from 'axios';
import Movie from './movie';

class MoviesContainer extends Component {
    constructor(props){
        super(props);

        this.State = {
            movies: []
        }
    }

    componentWillMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json'

        Axios.get(url).then((response) => {
            console.log('Response:', response);
        
            this.setState({
                movies: response.data.feed.entry
            });
        });

    }

    render(){
        console.log('The State is:', this.state);

        return (
            <div>
                <h2>Movie Container</h2>
                <Movie />
            </div>
        )
    }
}

export default MoviesContainer;