import Reflux from 'reflux';
import Movies from './Movies';
import MovieActions from '../actions/MovieActions';

var MovieStore = Reflux.createStore({
    listenables: MovieActions,
    sortField: 'rating',
    sortDirection: 'desc',
    searchTerm: '',

    onSortField: function(field) {
        this.sortField = field;
        this.trigger(this._processMoviesList());
    },

    onSortDirection: function(direction) {
        this.sortDirection = direction;
        this.trigger(this._processMoviesList());
    },

    onFilterList: function(searchTerm) {
        this.searchTerm = searchTerm;
        this.trigger(this._processMoviesList());
    },

    _processMoviesList: function() {
        var searchTerm = this.searchTerm;
        var sortField = this.sortField;
        var sortDirection = this.sortDirection;

        return Movies.filter(function(movie) {
            if(searchTerm.length === 0 || 
                movie.title.toLowerCase().indexOf(searchTerm) !== -1) {
                return true;
            } else {
                return false;
            }
        }).sort(function(a, b) {
            if(sortField === 'rating') {
                if(sortDirection === 'asc') {
                    return a[sortField] - b[sortField];
                } else {
                    return b[sortField] - a[sortField];
                }
            } else if(sortField === 'title') {
                if(sortDirection === 'asc') {
                    if(a[sortField] < b[sortField]) return -1;
                    if(a[sortField] > b[sortField]) return 1;
                    return 0;
                } else {
                    if(a[sortField] < b[sortField]) return 1;
                    if(a[sortField] > b[sortField]) return -1;
                    return 0;
                }
            }
        });
    }
});

module.exports = MovieStore;
