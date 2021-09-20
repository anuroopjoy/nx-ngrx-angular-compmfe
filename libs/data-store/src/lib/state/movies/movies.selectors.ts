import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { cloneDeep, isEmpty } from 'lodash-es';
import { pipe } from 'rxjs';
import { filter } from 'rxjs/operators';

import { categories, movies } from '../../app.interface';
import { CategoryState } from '../category/category.reducer';
import { Movie } from './movies.models';
import { MovieState } from './movies.reducer';

export const selectMovies = createFeatureSelector<MovieState>(movies);
const selectCategories =
  createFeatureSelector<CategoryState>(categories);

export const moviesSelector = createSelector(
  selectMovies,
  selectCategories,
  (movieStates, categories) => {
    const selectedMovies: Movie[][] = [];
    if (isEmpty(movieStates.allMovies)) {
      return selectedMovies;
    }
    const movies = cloneDeep(
      movieStates.allMovies[categories.selectedCategory?.name]
    );
    while (movies.length) selectedMovies.push(movies.splice(0, 3));
    return selectedMovies;
  }
);

export const filteredMovieSelector = pipe(
  select(moviesSelector),
  filter((item) => !!item?.length)
);
