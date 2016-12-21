import React, { Component } from 'react'
import MovieDetail from './MovieDetail'
import { Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

export default class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    handleMovieClick = (event) => {
        this.setState({
            isOpen: true
        })
    }

    onRequestClose = () => {
        this.setState({
            isOpen: false
        })
    }
    render() {
        const { props } = this
        return (
            <div onClick={this.handleMovieClick}>
                <Button
                    bsStyle="danger"
                    size="2x"
                >
                    <FontAwesome
                        name="window-close"
                        size="2x"
                    >
                    </FontAwesome>
                </Button>
                <div className="text-center" key={props.imdbID}>
                    <img className="center-block img-responsive" alt={props.Title} src={props.Poster}/>
                    <span>{props.Title}</span>
                </div>

                                        <MovieDetail
                                            isOpen={this.state.isOpen}
                                            onRequestClose={this.onRequestClose}
                                            contentLabel={props.Title}
                                            movie={props}
                                            key={props.imdbID + `m`}
                                            Title={props.Title}
                                            Poster={props.Poster}
                                        >
                                        </MovieDetail>
            </div>
        )
    }
}
