import { Component } from '@angular/core';
import {MainNavModule } from '../main_nav/main_nav.module';

@Component({
    selector:'main-menu',
    templateUrl:'main_menu.component.html',
    styleUrls:['main_menu.css']
})
export class Main_MenuComponent{
      reg_bool:boolean = false  ;
      ngOnInit(){
        this.reg_bool=true;
      }
}