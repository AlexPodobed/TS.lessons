import {Component, Input, Output, EventEmitter} from '@angular/core';
import Hero from './heroClass';

@Component({
    selector: "hero-child",
    template: `
        <p>#{{hero.id}} {{hero.name}}</p>
    `
})

export default class HeroChild{
    @Input() hero: Hero;
    @Output() onHeroClicked = new EventEmitter<boolean>();

    constructor(){
        console.log('hero child component initialized');
    }

}

