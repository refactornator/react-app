import React from 'react';
import Radium from 'radium';
import Infinite from 'react-infinite';
import _ from 'lodash';

import ChartGroup from '../components/ChartGroup';

var paddingTop = 36;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {windowWidth: window.innerWidth};

        this._handleClick = this._handleClick.bind(this);
        this._handleResize = this._handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this._handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._handleResize);
    }

    render() {
        var id = this.props.params.id;

        var numberOfColumns = Math.round(this.state.windowWidth / 380);
        
        return (
            <div style={styles.main}>
                <Infinite containerHeight={document.body.clientHeight - paddingTop} elementHeight={500}>
                    {_.range(100).map(function(index) {
                        if (id !== undefined && index === 0) {
                            return <ChartGroup rows={6} columns={numberOfColumns} key={index} />;
                        } else {
                            return <ChartGroup rows={2} columns={numberOfColumns} key={index} />;
                        }
                    })}
                </Infinite>
            </div>
        );
    }

    _handleClick() {
        console.log(this);
    }

    _handleResize() {
        this.setState({windowWidth: window.innerWidth});
    }
}

var styles = {
    main: {
        backgroundColor: '#EEE',
        paddingTop,
    }
}

module.exports = Home;
