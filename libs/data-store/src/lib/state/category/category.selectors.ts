import { createFeatureSelector, createSelector } from '@ngrx/store';
import { categories } from '../../app.interface';
import { CategoryState } from './category.reducer';

const selectCategories =
  createFeatureSelector<CategoryState>(categories);

export const categoriesSelector = createSelector(
  selectCategories,
  (state: CategoryState) => state.allCategories
);

export const currentCategorySelector = createSelector(
  selectCategories,
  (state: CategoryState) => state.selectedCategory
);
