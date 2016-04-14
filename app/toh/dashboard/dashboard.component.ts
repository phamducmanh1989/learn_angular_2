import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './../hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'toh-dashboard',
  templateUrl: './app/toh/dashboard/dashboard.component.html',
  styleUrls: ['./app/toh/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  errorMessage: string;
  constructor(
    private _router: Router,
    private _heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
    // this._heroService.getHeroes()
    //   .then(heroes => this.heroes = heroes.slice(1,5));
  }
  getHeroes() {
    this._heroService.getHeroes()
        .subscribe(
            heroes => this.heroes = heroes.slice(1,5),
            error =>  this.errorMessage = <any>error);
  }
  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/