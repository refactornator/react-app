import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { range } from 'lodash';

import Icon from './Icon';

@Radium
class NavBar extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        return (
            <div className="nav" style={styles.main}>
                <div className="nav-item" style={styles.navItem} key="menu">
                    <Icon glyph="menu"/>
                </div>
                <div className="nav-item" style={styles.navItem} key="settings">
                    <Icon glyph="admin"/>
                </div>
                <div className="nav-item" style={styles.navItem} key="home">
                    <Icon glyph="home"/>
                </div>
                <div className="logo" style={[styles.navItem, styles.logo]}>
                    <img src="img/headerLogo.svg" alt="Zoomdata" style={{height: 36, paddingRight: 70}} />
                </div>
                <div className="nav-item support" style={styles.navItem} key="support">
                    <Icon glyph="help-filled"/>
                </div>
                <div className="nav-item" style={styles.navItem} key="user">
                    <Icon glyph="user"/>
                </div>
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
        fontSize: 22,
        height: 36,
        width: 44,
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '36px',
        color: '#D2D2D2',
        textShadow: '2px 2px #000000',
        cursor: 'pointer',
        ':hover': {
            color: '#fff',
            backgroundColor: 'transparent'
        }
    },
    selected: {
        backgroundColor: '#111'
    },
    logo: {
        flexGrow: 1
    }
}

module.exports = NavBar;
