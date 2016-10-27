/**
 * Created by solar on 2016. 10. 27..
 */
import { Component } from '@angular/core';
@Component({
	selector: 'my-app',
	template: `
    <h1>{{title}}</h1>
    <a routerLink="/heroes"></a>
    <router-outlet></router-outlet>
    <!--<my-heroes></my-heroes>-->
  `
})
export class AppComponent {
	title = 'Tour of Heroes';
}
