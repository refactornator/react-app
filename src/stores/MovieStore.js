import Reflux from 'reflux';
import Movies from './Movies';
import MovieActions from '../actions/MovieActions';

var MovieStore = Reflux.createStore({
    listenables: [MovieActions],
    sortField: 'rating',
    sortDirection: 'desc',
    searchTerm: '',

    sortList: function(field, direction) {
        this.sortField = field;
        this.sortDirection = direction;
        var filteredMovies = this._processMoviesList();
        this.trigger(filteredMovies);
    },

    filterList: function(searchTerm) {
        this.searchTerm = searchTerm;
        var filteredMovies = this._processMoviesList();
        this.trigger(filteredMovies);
    },

    _processMoviesList() {
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
            if(sortDirection === 'asc') {
                return a[sortField] - b[sortField];
            } else {
                return b[sortField] - a[sortField];
            }
        });
    }
});

module.exports = MovieStore;
