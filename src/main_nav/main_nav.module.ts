import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainNavComponent} from './main_nav.component';
import { RegisterComponent } from '../register/register.component';
import { RegisterModule } from '../register/register.module';
import { SignInModule } from '../signin/signin.module';
import { SignInComponent } from '../signin/signin.component';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from '../Home/home.component';
import { HomeModule } from '../Home/home.module';

const appRoutes:Routes=[
    {path: '', pathMatch: 'full', redirectTo: 'Home' },
    {path:'Register',component:RegisterComponent},
    {path:'SignIn',component:SignInComponent},
    {path:'Home',component:HomeComponent}
  ]
 
@NgModule({
    imports:[RouterModule.forRoot(appRoutes),RegisterModule,
        SignInModule],
    declarations:[
        MainNavComponent
    ],
    exports:[MainNavComponent]
})
export class MainNavModule{

}