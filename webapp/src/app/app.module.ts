import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MovieListComponent} from './component/movie-list/movie-list.component';
import {MovieService} from './service/movie.service';
import {AppRoutingModule} from './app-routing.module';
import {NewMovieComponent} from './component/new-movie/new-movie.component';
import {MovieListItemComponent} from './component/movie-list-item/movie-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NewMovieComponent,
    MovieListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
