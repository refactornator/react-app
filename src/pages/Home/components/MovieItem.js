import React from 'react';

import './MovieItem.scss';

class MovieItem extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        return <div className="movie-item" onClick={this._handleClick}>
            <img src="http://placekitten.com/275/150"/>
            <div className="info">
                <div className="title">{this.props.title}</div>
                <div className="year">Released: {this.props.year}</div>
                <div className="rating">Rating: {this.props.rating}</div>
            </div>
        </div>;
    }

    _handleClick() {
        console.log(this);
    }
}

module.exports = MovieItem;
