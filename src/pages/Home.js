import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import ChartItem from '../components/ChartItem';

@Radium
class Home extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        return (
            <div>
                {_.range(10).map(function() {
                    return <ChartItem />;
                })}
            </div>
        );
    }

    _handleClick() {
        console.log(this);
    }
}

var styles = {
}

module.exports = Home;
