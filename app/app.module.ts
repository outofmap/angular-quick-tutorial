import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from "./in-memory-data-service";


import {AppRoutingModule} from "./app-routing.module";

import { AppComponent }   from './app.component';
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroService} from "./hero.service";
import './rxjs-extensions';
import {HeroSearchComponent} from "./hero-search.component";


@NgModule({
	imports:      [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		HeroDetailComponent,
		HeroesComponent,
		DashboardComponent,
		HeroSearchComponent
	],
	providers : [
		HeroService
	],
	bootstrap:    [
		AppComponent
	]
})
export class AppModule { }

