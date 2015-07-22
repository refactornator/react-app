import React from 'react';
import { Link } from 'react-router';
import { range } from 'lodash';
import classNames from 'classnames';

import Icon from './Icon';

import './NavBar.scss';

class NavImage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={{display: 'flex', flexGrow: 1, justifyContent: 'center'}}>
                <img src={this.props.src} alt={this.props.alt} style={{height: 36, paddingRight: 70}} />
            </div>
        );
    }
}

class NavButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: props.selected || false};
    }

    render() {
        var classes = classNames('nav-button', {
            'selected': this.state.selected
        });
        return (
            <div className={classes} key={this.props.name}>
                <Icon glyph={this.props.glyph === undefined ? this.props.name : this.props.glyph}/>
                {() => {
                    if (this.state.selected) {
                        return <div className="pointer-down"></div>;
                    }
                }()}
            </div>
        );
    }
}
NavButton.propTypes = { 
    name: React.PropTypes.string.isRequired,
    glyph: React.PropTypes.string,
    selected: React.PropTypes.bool
};

class NavBar extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        return (
            <div className="nav">
                <NavButton name="menu" />
                <NavButton name="admin" />
                <NavButton name="home" selected={true} />
                <NavImage src="img/headerLogo.svg" alt="Zoomdata" />
                <NavButton name="support" glyph="help-filled" />
                <NavButton name="user" />
            </div>
        );
    }

    _handleClick() {
        console.log(this);
    }
}

module.exports = NavBar;
