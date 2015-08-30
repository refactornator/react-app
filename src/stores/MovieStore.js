import Reflux from 'reflux';
import Movies from './Movies';
import MovieActions from '../actions/MovieActions';

var MovieStore = Reflux.createStore({
    listenables: [MovieActions],

    filterList: function(searchTerm) {
        var filteredMovies = Movies;

        if(searchTerm && searchTerm.length > 0) {
            filteredMovies = Movies.filter(function(movie) {
                if(movie.Title.toLowerCase().indexOf(searchTerm) !== -1) {
                    return true;
                } else {
                    return false;
                }
            });
        }

        this.trigger(filteredMovies);
    }
});

module.exports = MovieStore;
