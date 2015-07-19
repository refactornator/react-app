import React from 'react';
import Router from 'react-router';  
import { RouteHandler, Route } from 'react-router';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
        <div id="app">
            <div className="nav"></div>
            <RouteHandler/>
        </div>
    );
  }
}

var routes = (  
  <Route handler={App}>
    <Route path="/" handler={Home}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
