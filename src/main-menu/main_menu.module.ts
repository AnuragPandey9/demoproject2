import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Main_MenuComponent} from './main_menu.component';
//import {MainNavModule} from '../main_nav/main_nav.module';
//import { RegisterModule } from '../register/register.module';
//import { SignInModule } from '../signin/signin.module';

@NgModule({
    imports:[
    CommonModule
    ],
    declarations:[
     Main_MenuComponent,
    ],
    exports:[Main_MenuComponent]
})
export class Main_MenuModule{

}