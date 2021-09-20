import { CategoryState } from './state/category/category.reducer';
import { MovieState } from './state/movies/movies.reducer';

export interface AppState {
  movies: MovieState;
  categories: CategoryState;
}

export const movies = 'movies';
export const categories = 'categories';