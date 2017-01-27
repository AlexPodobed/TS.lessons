import {Component, OnInit} from "@angular/core";
import Hero from "./heroClass";

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Component({
    selector: "hero-list",
    template: `
        <div>
            <strong>Hero list size: {{heroes.length}}</strong>
            <hero-child *ngFor="let hero of heroes" [hero]="hero"></hero-child>
        </div>
    `
})

export default class HeroList implements OnInit{
    public heroes:Hero[] = HEROES;

    ngOnInit(){
        console.log('herolist initialized')
    }
}
