import { Injectable } from '@angular/core';

import { movieList } from './movies.constants';
import { Category } from './state/category/category.models';
import { Movie } from './state/movies/movies.models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getCategories(): Category[] {
    return [
      { name: 'Action' },
      { name: 'Animation' },
      { name: 'Comedy' },
      { name: 'Horror' },
    ];
  }

  getMovies(): Movie[] {
    return movieList;
  }
}
