import React from 'react';
import Radium from 'radium';

@Radium
class Icon extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        let className = `zdss-icon-${this.props.glyph}`;

        return (
            <i className={className} {...this.props}></i>
        );
    }

    _handleClick() {
        console.log(this);
    }
}

Icon.propTypes = { glyph: React.PropTypes.string.isRequired };

var styles = {
}

module.exports = Icon;
