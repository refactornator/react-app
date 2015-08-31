import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home/Home';
import MovieActions from './actions/MovieActions';

import '../styles/main.scss'

MovieActions.filterList(''); 

class App extends React.Component {
  render() {
    return (
        <div id="app">
            <NavBar/>
            <Home/>
        </div>
    );
  }
}

React.render(<App/>, document.body);
