import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

import ChartItem from './ChartItem';

@Radium
class ChartGroup extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        var items = this.props.rows * this.props.columns;
        var width = this.props.columns * 310;
        return (
            <div>
                <div style={[styles.header, {width}]}>
                    <img style={styles.icon} src="http://placekitten.com/40/36"/>
                    <span style={styles.title}>Title</span>
                    <a href="#" style={styles.viewAll}>View All »</a>
                </div>
                <div style={[styles.items, {width}]}>
                    {_.range(items).map(function(index) {
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

var styles = {
    header: {
        display: 'flex',
        margin: '10px auto'
    },
    title: {
        flexGrow: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#595959',
        paddingLeft: 10,
        fontSize: 24,
        letterSpacing: -0.6,
        lineHeight: '36px'
    },
    viewAll: {
        marginRight: 10
    },
    items: {
        display: 'flex',
        margin: '0 auto',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
}

module.exports = ChartGroup;
