import React from 'react';
import Radium from 'radium';

@Radium
class ChartItem extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        return <div style={styles.main} onClick={this._handleClick}>
            <span style={styles.title}>Title</span>
            <span style={styles.lastUpdated}>an hour ago</span>
            <img src="http://placekitten.com/284/194"/>
        </div>;
    }

    _handleClick() {
        console.log(this);
    }
}

var styles = {
    main: {
        width: 292,
        height: 222,
        padding: 12,
        marginRight: 10,
        marginBottom: 10,
        display: 'inline-block',
        boxShadow: '2px 2px rgba(89,89,89,0.4)',
        transition: 'box-shadow 100ms linear',
        ':hover': {
            cursor: 'pointer',
            boxShadow: '2px 2px 0 0 rgba(0,0,0,0.35), inset 0 0 0 5px #68AD45'
        }
    },

    title: {
        float: 'left',
        fontWeight: 300,
        fontSize: 18,
    },

    lastUpdated: {
        float: 'right',
        fontSize: 12,
        color: '#939393',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    }
}

module.exports = ChartItem;
