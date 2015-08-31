import React from 'react';

import './MovieItem.scss';

class MovieItem extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        return <div className="movie-item" onClick={this._handleClick}>
            <img src={`/img/posters/${this.props.imdbId}-150x223.jpg`} width="150" height="223" />
            <div className="info">
                <div className="title">{this.props.title}</div>
                <div className="year"><label>Released:</label> {this.props.year}</div>
                <div className="rating"><label>Rating:</label> {this.props.rating}</div>
                <div className="duration"><label>Runtime:</label> {parseInt(this.props.duration, 10)} mins</div>
                <div className="genres"><label>Genres:</label> {this.props.genres}</div>
                <div className="plot">{this.props.plot}</div>
            </div>
        </div>;
    }

    _handleClick() {
        console.log(this);
    }
}

module.exports = MovieItem;
