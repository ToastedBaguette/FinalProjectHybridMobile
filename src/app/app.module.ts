import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';   
import { Routes, RouterModule } from '@angular/router';

import { IonicStorageModule } from '@ionic/storage-angular';
import { CategoryComponent } from './category/category.component';
import { ComiclistComponent } from './comiclist/comiclist.component';
import { FavoritelistComponent } from './favoritelist/favoritelist.component';
import { SearchComponent } from './search/search.component';

const appRoutes = [
  { path: 'category', component: CategoryComponent },
  { path: 'comiclist/:id', component: ComiclistComponent },
  { path: 'favoritelist', component: FavoritelistComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  declarations: [AppComponent, CategoryComponent, ComiclistComponent, FavoritelistComponent, SearchComponent],
  imports: [IonicStorageModule.forRoot(), BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
