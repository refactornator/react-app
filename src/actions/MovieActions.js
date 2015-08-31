import Reflux from 'reflux';

var MovieActions = Reflux.createActions([
    'sortField',
    'sortDirection',
    'filterList'
]);

module.exports = MovieActions;
