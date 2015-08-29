import React from 'react';
import Infinite from 'react-infinite';
import _ from 'lodash';

import MovieItem from './components/MovieItem';
import movies from './components/Movies';

import './Home.scss';

var paddingTop = 100;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {windowWidth: window.innerWidth};

        this._handleClick = this._handleClick.bind(this);
        this._handleResize = this._handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this._handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._handleResize);
    }

    render() {
        var id = this.props.params.id;

        var numberOfColumns = Math.round(this.state.windowWidth / 380);
        
        return (
            <div className="home" style={{paddingTop}}>
                <Infinite containerHeight={document.body.clientHeight - paddingTop} elementHeight={200}>
                    {movies.map(function(movie) {
                        return <MovieItem title={movie.Title} year={movie.Year} rating={movie.Rating} />
                    })}
                </Infinite>
            </div>
        );
    }

    _handleClick() {
        console.log(this);
    }

    _handleResize() {
        this.setState({windowWidth: window.innerWidth});
    }
}

module.exports = Home;
