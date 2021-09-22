import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { categoryReducer, moviesReducer } from '@nx-ngrx-angular/data-store';
import { CategoryComponent } from '../category/category.component';
import { ContainerComponent } from '../container/container.component';
import { LoaderDirective } from '../loader.directive';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    CategoryComponent,
    LoaderDirective,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      { movies: moviesReducer, categories: categoryReducer },
      {}
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
