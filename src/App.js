import React, { Component } from 'react';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './components/SearchBar'
import axios from 'axios'

import Movie from './components/Movie'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            movies: [],
            userInputList: [],
            isOpen: false
        }
    }
    componentDidMount = () => {
        const savedUserInput = JSON.parse(localStorage.getItem('movies'))
        if (savedUserInput === null) {
            return
        }
        const filteredMovies = savedUserInput.filter((item) => {
            if (Object.keys(item).includes("imdbID")) {
                return item
            }
        })
        this.setState({
            movies: filteredMovies
        })
    }
    handleSearchbarChange = (event, suggestions) => {
        this.setState({
            suggestions: suggestions
        })
        console.log(suggestions)
    }

    handleMovieListChange = (event) => {
        console.log(event)
    }

    handleSuggestionSelect = (suggestion) => {
        const newMovies = this.state.movies.concat(suggestion).reduce((acc, prev) => {
            if (prev.Actors) acc.push(prev)
            return acc
        }, [])
        this.setState({
            movies: newMovies
        })
        /* localStorage.setItem('movies', JSON.stringify(this.state.movies))*/
        // does the suggestion need to be split into parts?

        /* axios.post('http://localhost:9001/api/movies/', this.state.movies)
         *                       .then(resp => {
         *                           console.log(resp)
         *                       })
         *                       .catch(err => {console.error(`POST error: ${err}`)})*/
    }
  render() {
    return (
        <div>
            <SearchBar
                inputProps={this.props.inputProps}
                onChange={this.handleSearchbarChange}
                movies={this.props.movies}
                handleSelect={this.handleSuggestionSelect}
            />
            <MovieList
                onClick={this.props.onClick}
                movies={this.state.movies}
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onRequestClose}
                handleChange={this.handleMovieListChange}
            >
            </MovieList>
        </div>
    );
  }
}
