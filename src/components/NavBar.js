import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { range } from 'lodash';

import Icon from './Icon';
import ChartItem from './ChartItem';

@Radium
class ChartGroup extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        return (
            <div className="nav" style={styles.main}>
                <div className="nav-item hamburger" style={styles.navItem}>
                    <Icon glyph="menu"/>
                </div>
                <div className="nav-item settings" style={styles.navItem}>S</div>
                <div className="nav-item home" style={styles.navItem}>Ho</div>
                <div className="nav-item logo" style={[styles.navItem, styles.logo]}>ZD</div>
                <div className="nav-item support" style={styles.navItem}>?</div>
                <div className="nav-item user" style={styles.navItem}>U</div>
            </div>
        );
    }

    _handleClick() {
        console.log(this);
    }
}

var styles = {
    main: {
        height: 36,
        minHeight: 36,
        backgroundColor: '#323232',
        boxShadow: '0 3px 2px rgba(50,50,50,0.2)',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        zIndex: 1040,
        display: 'flex',
        justifyContent: 'center'
    },
    navItem: {
        height: 36,
        width: 44,
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '36px',
        color: 'white',
        textShadow: '0 -1px 0 rgba(0,0,0,0.25)',
        cursor: 'pointer'
    },
    selected: {
        backgroundColor: '#111'
    },
    logo: {
        flexGrow: 1
    }
}

module.exports = ChartGroup;
