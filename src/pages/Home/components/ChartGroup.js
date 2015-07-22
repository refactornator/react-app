import React from 'react';
import { Link } from 'react-router';
import { range } from 'lodash';

import ChartItem from './ChartItem';

import './ChartGroup.scss';

class ChartGroup extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        var items = this.props.rows * this.props.columns;
        var width = this.props.columns * 310;
        return (
            <div className="chart-group" style={{paddingTop: 36}}>
                <div className="header" style={{width}}>
                    <img src="http://placekitten.com/40/36"/>
                    <span className="title">Title</span>
                    <Link className="view-all" to="details" params={{id: "123"}}>View All »</Link>
                </div>
                <div className="chart-items" style={{width}}>
                    {range(items).map(function(index) {
                        return <ChartItem key={index} />;
                    })}
                </div>
            </div>
        );
    }

    _handleClick() {
        console.log(this);
    }
}

module.exports = ChartGroup;
