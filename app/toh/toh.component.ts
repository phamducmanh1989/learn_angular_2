import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroFormComponent} from './hero-form/hero-form.component'
import {PowerBoostCalculator} from './power-boost-calculator.component'
import {CONFIG} from './toh.config'
import {provide}           from 'angular2/core';
import {XHRBackend}        from 'angular2/http';
// in-memory web api imports
import {InMemoryBackendService, SEED_DATA}         from 'a2-in-memory-web-api/core';
import {HeroData}          from './../heroes-data';

@Component({
  selector: 'my-toh',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['HeroForm']">Hero Form</a>
      <a [routerLink]="['Pipes']">Pipes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/toh/toh.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    HeroService,
    provide('toh.config', {useValue: CONFIG}),
    // in-memory web api providers
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA,  { useClass: HeroData }) // in-mem server data
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/hero_form',
    name: 'HeroForm',
    component: HeroFormComponent
  },
  {
    path: '/pipes',
    name: 'Pipes',
    component: PowerBoostCalculator
  }
])
export class TohComponent {
  title = 'Tour of Heroes';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/