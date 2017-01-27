import {Component, OnInit} from '@angular/core';

@Component({
    selector: "my-app",
    styles: [`
        h1{color: red}
    `],
    template: `
        <h1>Learning {{name}}</h1>
        <hero-list></hero-list>
        <version-parent></version-parent>
    `
})

export class AppComponent implements OnInit{
    public name: string;

    ngOnInit(){
      this.name = "angular";
    }
}