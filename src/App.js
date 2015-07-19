import React from 'react';
import Router from 'react-router';  
import { DefaultRoute, RouteHandler, Route } from 'react-router';
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

var Message = React.createClass({
  render () {
    return <h3>Message</h3>;
  }
});

var routes = (  
  <Route handler={App}>
    <DefaultRoute handler={Home}/>

    <Route path="/home" handler={Home}>
        <Route name="details" path="details/:id" handler={Message}/>
    </Route>
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, document.body);
});
