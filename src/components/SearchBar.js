import React, { Component } from 'react'
export default class SearchBar extends Component {
    constructor() {
        super()

        this.state = {
            userInput: '',
            userInputList: []
        }
    }

    componentDidMount() {
        const savedUserInput = JSON.parse(localStorage.getItem('userInputList'))

        if (savedUserInput) {
            this.setState({
                ...this.state,
                userInputList: savedUserInput
            })
        }
    }

    handleInputChange(event) {
        this.setState({
            ...this.state,
            userInput: event.target.value
        })
    }

    render() {
        return (
            <section className="container">
                <div className="row">
                    <section className="col-xs-12">
                        <label htmlFor="userInput">Search movies to add:
                        </label>
                        <input
                            type="text"
                            value={this.state.userInput}
                            onChange={this.handleInputChange.bind(this)}
                        />
                        <button
                        />
                    </section>
                </div>
            </section>
        )
}
    }