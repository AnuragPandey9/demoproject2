import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Main_MenuModule } from '../main-menu/main_menu.module';
import { AppComponent } from './app.component';
import { HomeModule } from '../Home/home.module';
import { HomeComponent } from '../Home/home.component';
import { MainNavModule } from '../main_nav/main_nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,Main_MenuModule,HomeModule,MainNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };
