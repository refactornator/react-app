import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import { range } from 'lodash';

import Icon from './Icon';

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

@Radium
class NavButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: props.selected || false};

        this.styles = {
            main: {
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
            pointerDown: {
                width: 0,
                height: 0,
                display: 'block',
                left: 13,
                top: -3,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid #000',
                position: 'relative',
                zIndex: 2055
            },
            selected: {
                color: '#D6DF23',
                backgroundColor: '#111',
                ':hover': {
                    color: '#D6DF23',
                    backgroundColor: '#111',
                }
            }
        };
    }

    render() {
        var mainStyle = [this.styles.main];
        if (this.state.selected) {
            mainStyle.push(this.styles.selected);
        }
        return (
            <div style={mainStyle} key={this.props.name}>
                <Icon glyph={this.props.glyph === undefined ? this.props.name : this.props.glyph}/>
                {() => {
                    if (this.state.selected) {
                        return <div className="pointer-down" style={this.styles.pointerDown}></div>;
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

@Radium
class NavBar extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);

        this.styles = {
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
                display: 'flex'
            }
        };
    }

    render() {
        return (
            <div className="nav" style={this.styles.main}>
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
