import FavoriteMovieIdb from '../../data/favourite-movie-idb'
import FavoriteMovieSearchView from './liked-movies/favorite-movie-search-view'
import FavoriteMovieShowPresenter from './liked-movies/favorite-movie-show-presenter'
import FavoriteMovieSearchPresenter from './liked-movies/favorite-movie-search-presenter'

const view = new FavoriteMovieSearchView()

const Favourites = {
  async render () {
    return view.getTemplate()
  },

  async afterRender () {
    new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteMovieIdb })
    new FavoriteMovieSearchPresenter({ view, favoriteMovies: FavoriteMovieIdb })
  }
}

export default Favourites
