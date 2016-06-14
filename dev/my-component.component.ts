import {Component} from '@angular/core';

@Component({
    selector: 'my-component',
    template: `
        Hi I'm {{name}} and this is my very first Angular 2 component! <span [class.is-awesome]="inputElement.value === 'yes'">It's so awesome!</span>
        <br>
        <br>
        Is it awesome?
        <input type="text" #inputElement (keyup)="0">
        <br><br>
        <button>Only enabled if 'yes' was entered</button>
    `,
    styleUrls: ['src/css/mycomponent.css']
})
export class MyComponentComponent   {
    name = 'Matt';
}