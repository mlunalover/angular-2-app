System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n        Hi I'm {{name}} and this is my very first Angular 2 component! <span [class.is-awesome]=\"inputElement.value === 'yes'\">It's so awesome!</span>\n        <br>\n        <br>\n        Is it awesome?\n        <input type=\"text\" #inputElement (keyup)=\"0\">\n    ",
                        styleUrls: ['src/css/mycomponent.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtnQkFFQSxDQUFDO2dCQWJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLFFBQVEsRUFBRSxpUkFNVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztxQkFDekMsQ0FBQzs7d0NBQUE7Z0JBR0YsMkJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVEQUVDLENBQUEiLCJmaWxlIjoibXktY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIEhpIEknbSB7e25hbWV9fSBhbmQgdGhpcyBpcyBteSB2ZXJ5IGZpcnN0IEFuZ3VsYXIgMiBjb21wb25lbnQhIDxzcGFuIFtjbGFzcy5pcy1hd2Vzb21lXT1cImlucHV0RWxlbWVudC52YWx1ZSA9PT0gJ3llcydcIj5JdCdzIHNvIGF3ZXNvbWUhPC9zcGFuPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxicj5cbiAgICAgICAgSXMgaXQgYXdlc29tZT9cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RWxlbWVudCAoa2V5dXApPVwiMFwiPlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnRDb21wb25lbnQgICB7XG4gICAgbmFtZTogJ01hdHQnO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
