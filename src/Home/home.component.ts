import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/retry

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ['home.css']
})
export class HomeComponent {
    private data: Observable<Array<String>>;
    private values: Array<String> =[];
    private anyErrors: boolean;
    private finished: boolean;
    private value:number=0;
  //  private value:number=90;
    constructor() {
    }
}