import { NgModule, isDevMode } from '@angular/core';
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
import { ReadcomicComponent } from './readcomic/readcomic.component';
import { ReplycomicComponent } from './replycomic/replycomic.component';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';

const appRoutes = [
  { path: 'category', component: CategoryComponent },
  { path: 'comiclist/:id', component: ComiclistComponent },
  { path: 'favoritelist', component: FavoritelistComponent },
  { path: 'search', component: SearchComponent },
  { path: 'readcomic/:id', component: ReadcomicComponent},
  { path: 'replykomentar/:id_komentar/:id_komik', component: ReplycomicComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [AppComponent, HomeComponent, CategoryComponent, ComiclistComponent, FavoritelistComponent, SearchComponent, ReadcomicComponent, ReplycomicComponent],
  imports: [IonicStorageModule.forRoot(), BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes), ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
