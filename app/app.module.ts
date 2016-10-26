/**
 * Created by solar on 2016. 10. 26..
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import {FormsModule} from "@angular/forms";
@NgModule({
	imports:      [
		BrowserModule,
		FormsModule
					],
	declarations: [
		AppComponent
	],
	bootstrap:    [
		AppComponent
	]
})
export class AppModule { }

