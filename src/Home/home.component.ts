import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


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
    constructor() {
    }
    // init() {
    //     // this.data = new Observable(observer => {
    //     //     setTimeout(() => {
    //     //         observer.next('../assets/images/abc.webp');
    //     //     }, 1000);
            
    //     //     setTimeout(() => {
    //     //         observer.next('../assets/images/def.webp');
    //     //     }, 3000);
            
    //     //     setTimeout(() => {
    //     //         observer.complete();
    //     //     }, 3000);
    //     // });
    //     // let subscription = this.data.subscribe(
    //     //     value => this.values.push(value),
    //     //     error => this.anyErrors = true,
    //     //     () => this.finished = true
    //     // );
    //     // this.init(); 
    //    setTimeout(()=>{
    //          this.value = this.value+1;
    //    },1000);
    //   this.init(); 
    // }
}