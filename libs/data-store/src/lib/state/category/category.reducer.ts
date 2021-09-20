import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash-es';

import { getCategories, setSelectedCategory } from './category.actions';
import { Category } from './category.models';

export interface CategoryState {
  allCategories: Category[];
  selectedCategory: Category;
}

const initialState: CategoryState = {
  allCategories: [],
  selectedCategory: { name: '' },
};

export const categoryReducer = createReducer(
  initialState,
  on(getCategories, (state, { categories }) => ({
    ...state,
    allCategories: categories,
  })),
  on(setSelectedCategory, (state, { position }) => {
    const allCategories = cloneDeep(state.allCategories);
    const selectedCategory = allCategories[position];
    if (selectedCategory) {
      selectedCategory.isActive = true;
    }
    return {
      ...state,
      selectedCategory,
    };
  })
);
