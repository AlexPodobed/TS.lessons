
import {Component, OnChanges, Input, SimpleChange} from "@angular/core";
@Component({
    selector: "version-parent",
    template: `
        <h2>Versions:</h2>
        <button (click)="incrementMajor()">++major</button>
        <button (click)="incrementMinor()">++minor</button>
        <version-child [major]="major" [minor]="minor"></version-child>
    `
})

export class VersionParent{
    major: number = 1;
    minor: number = 23;

    incrementMinor(){
        this.minor++;
    }

    incrementMajor(){
        this.major++;
        this.minor = 0;
    }
}

@Component({
    selector: 'version-child',
    template: `
        <h3>Version {{major}}.{{minor}}</h3>
        <h4>changelog:</h4>
        <ul>
            <li *ngFor="let change of changeLog">{{change}}</li>
        </ul>
    `
})

export class VersionChild implements OnChanges{
    @Input() major: number;
    @Input() minor: number;

    public changeLog: string[] = [];

    ngOnChanges(changes: {[propKey: string]: SimpleChange}){
        console.log('changed')
        let log:string[] = [];

        for(let propName in changes){
            let changedProp = changes[propName];
            let to = JSON.stringify(changedProp.currentValue)

            if(changedProp.isFirstChange()){
                log.push(`initial value ${propName} set to ${to}`)
            }else {
                let from = JSON.stringify(changedProp.previousValue);
                log.push(`${propName} changed from ${from} to ${to}`);
            }
        }
        this.changeLog.push(log.join(', '));
    }
}