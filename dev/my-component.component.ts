import {Component} from '@angular/core';

@Component({
    selector: 'my-component',
    template: `
        Hi I'm {{name}} and this is my very first Angular 2 component! It's so awesome!
        <br>
        <br>
        Is it awesome?
        <input type="text">
    `
})
export class MyComponentComponent   {
    name: 'Matt';
}