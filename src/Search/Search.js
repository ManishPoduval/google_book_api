import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: "",
        };
    }
    
    updateInput = (event) => {
        event.preventDefault();
        this.setState({query: event.value})
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.updateInput}
                    placeholder="Search"
                />
                <button onClick={() => {this.props.setQuery(this.state.query)}}>Search</button>
            </div>
        )
    }
}
