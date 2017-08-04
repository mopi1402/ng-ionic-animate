# ng-ionic-animate [![GitHub release](https://img.shields.io/github/release/sarahtully/ng-ionic-animate.svg)](https://github.com/sarahtully/ng-ionic-animate/releases) [![Build Status](https://travis-ci.org/sarahtully/ng-ionic-animate.svg?branch=master)](https://travis-ci.org/sarahtully/ng-ionic-animate) [![devDependencies Status](https://david-dm.org/sarahtully/ng-ionic-animate/dev-status.svg)](https://david-dm.org/sarahtully/ng-ionic-animate?type=dev)

ng-ionic-animate is a helpful site for learning angular animations.

Using Animations
----------------
Angular animations are built on top of the standard Web Animations API and run natively on browsers that support it.

Animations are defined inside @Component metadata. Before you can add animations, you need to import a few animation-specific imports and functions:

#### app.module.ts
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
```

```typescript
@NgModule({
  ...
  imports: [
    ...
    BrowserModule,
    BrowserAnimationsModule
  ]
  ...
})
```

#### page-where-i-want-animations.ts
Add the following *as needed* imports into the page's .ts file where you want to use animations:

```typescript
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
```

#### Heroes example from angular's website:
Below is the heroes animation example from [Angular's site](https://angular.io/guide/animations)

```typescript
import {
  Component,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
 
import { Heroes } from './hero.service';
 
@Component({
  selector: 'hero-list-basic',
  template: `
    <ul>
      <li *ngFor="let hero of heroes"
          [@heroState]="hero.state"
          (click)="hero.toggleState()">
        {{hero.name}}
      </li>
    </ul>
  `,
  styleUrls: ['./hero-list.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class HeroListBasicComponent {
  @Input() heroes: Heroes;
}
```

### Safari Support
In order to get animations to work in safari you must add the following polyfill:
1. ```npm install web-animations-js --save```
2. Under src > app > main.ts add the following import: 
```typescript
import 'web-animations-js/web-animations.min';
``` 


## License
ng-ionic-animate is licensed under the MIT license. (http://opensource.org/licenses/MIT)

