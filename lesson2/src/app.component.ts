import {Component, OnInit} from '@angular/core';

@Component({
    selector: "my-app",
    template: `<h1>Hello {{name}}</h1>`
})

export class AppComponent implements OnInit{
    public name: string;

    ngOnInit(){
      this.name = "world";
    }
}