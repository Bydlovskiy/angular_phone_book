import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchPipe } from './search/pipes/search.pipe';
import { SortPipe } from './search/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
