import React from 'react';

class Icon extends React.Component {
    constructor() {
        super();
    }

    render() {
        let className = `zdss-icon-${this.props.glyph}`;

        return (
            <i className={className} {...this.props}></i>
        );
    }
}

Icon.propTypes = { glyph: React.PropTypes.string.isRequired };

module.exports = Icon;
