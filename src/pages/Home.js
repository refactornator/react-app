import React from 'react';
import Radium from 'radium';
import Infinite from 'react-infinite';
import _ from 'lodash';

import ChartGroup from '../components/ChartGroup';

class Home extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    elementInfiniteLoad() {
        return <div className="infinite-list-item">
            Loading...
        </div>;
    }

    render() {
        return (
            <div style={styles.main}>
                <Infinite containerHeight={document.body.clientHeight} elementHeight={500}>
                    {_.range(100).map(function(index) {
                        return <ChartGroup rows={2} columns={3} key={index} />;
                    })}
                </Infinite>
            </div>
        );
    }

    _handleClick() {
        console.log(this);
    }
}

var styles = {
    main: {
        backgroundColor: '#EEE'
    }
}

module.exports = Home;
