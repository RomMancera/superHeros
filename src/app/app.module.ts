import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { SHeroesComponent } from './pages/s-heroes/s-heroes.component';
import { SHeroeComponent } from './pages/s-heroe/s-heroe.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SHeroesComponent,
    SHeroeComponent
  ],
  imports: [
    BrowserModule,
    ROUTES,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
