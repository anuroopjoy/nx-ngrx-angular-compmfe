import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DataService,
  categoriesSelector,
  currentCategorySelector,
  getCategories,
  setSelectedCategory,
  Category,
} from '@nx-ngrx-angular/data-store';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories$!: Observable<Category[]>;
  selectedCategory$!: Observable<Category>;

  constructor(private dataService: DataService, private readonly store: Store) {
    this.categories$ = this.store.select(categoriesSelector);
    this.selectedCategory$ = this.store.select(currentCategorySelector);
  }

  ngOnInit(): void {
    const categories = this.dataService.getCategories();
    this.store.dispatch(getCategories({ categories }));
    if (categories?.length) {
      this.store.dispatch(setSelectedCategory({ position: 0 }));
    }
  }

  showDetails(index: number) {
    this.store.dispatch(setSelectedCategory({ position: index }));
  }
}
