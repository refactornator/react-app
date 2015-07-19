import React from 'react';
import Radium from 'radium';
import ChartGroup from '../components/ChartGroup';

@Radium
class Home extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        return (
            <div style={styles.main}>
                <ChartGroup rows={2} columns={3} key="home" />
            </div>
        );
    }

    _handleClick() {
        console.log(this);
    }
}

var styles = {
    main: {
        backgroundColor: '#EEE',
        height: '100%',
        width: '100%',
        overflow: 'auto'
    }
}

module.exports = Home;
