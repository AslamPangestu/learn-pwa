import { itActsAsFavoriteMovieModel } from './contracts/favoriteMovieContract'
import FavoriteMovieIdb from '../src/scripts/data/favourite-movie-idb'

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteMovieIdb.getAllMovies()).forEach(async (movie) => {
      await FavoriteMovieIdb.deleteMovie(movie.id)
    })
  })

  itActsAsFavoriteMovieModel(FavoriteMovieIdb)
})
