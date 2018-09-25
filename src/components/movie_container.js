import React, { Component } from 'react';
import Axios from 'axios';
import Movie from './movie';

class MoviesContainer extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            movies: []
        };
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
        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movie info={movieInfo} key={index}/>;
        });

        return (
            <div>
                {movieList}
            </div>
        )
    }
}

export default MoviesContainer;