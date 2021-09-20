import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  DataService,
  getCategories,
  setSelectedCategory,
} from '@nx-ngrx-angular/data-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mfe1';
  constructor(private readonly store: Store, private dataService: DataService) {
    const categories = this.dataService.getCategories();
    this.store.dispatch(getCategories({ categories }));
    if (categories?.length) {
      this.store.dispatch(setSelectedCategory({ position: 0 }));
    }
  }
}
