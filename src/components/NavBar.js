import React from 'react';
import { Link } from 'react-router';
import { range } from 'lodash';
import classNames from 'classnames';

import MovieActions from '../actions/MovieActions';

import './NavBar.scss';

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {ratingFilterValue: 0};

        this._handleInput = this._handleInput.bind(this);
        this._handleRangeChange = this._handleRangeChange.bind(this);
    }

    render() {
        return (
            <div className="nav">
                <div className="title">IMDB Movie Searcher</div>
                <div className="search-wrapper">
                    <label className="search" htmlFor="search">Search Titles: </label>
                    <input id="search" className="search" type="text" onChange={this._handleInput} />
                </div>
                <input style={{display: 'none'}} type="range" min="0" max="5" onChange={this._handleRangeChange} value={this.state.ratingFilterValue} />
            </div>
        );
    }

    _handleInput(e) {
        var value = e.target.value;
        MovieActions.filterList(value);
    }

    _handleRangeChange(e) {
        var value = e.target.value;
        this.setState({
            ratingFilterValue: value
        });
    }
}

module.exports = NavBar;
