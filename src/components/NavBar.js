import React from 'react';
import { Link } from 'react-router';
import { range } from 'lodash';
import classNames from 'classnames';

import './NavBar.scss';

class NavBar extends React.Component {
    constructor() {
        super();
        this._handleInput = this._handleInput.bind(this);
    }

    render() {
        return (
            <div className="nav">
                <div className="title">IMDB Movie Searcher</div>
                <input className="search" type="text" onChange={this._handleInput} />
            </div>
        );
    }

    _handleInput() {
        console.log(this);
    }
}

module.exports = NavBar;
