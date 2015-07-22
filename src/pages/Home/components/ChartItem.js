import React from 'react';

import './ChartItem.scss';

class ChartItem extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        return <div className="chart-item" onClick={this._handleClick}>
            <span className="title">Title</span>
            <span className="last-updated">an hour ago</span>
            <img src="http://placekitten.com/275/150"/>
        </div>;
    }

    _handleClick() {
        console.log(this);
    }
}

module.exports = ChartItem;
