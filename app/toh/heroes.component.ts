import { Component, OnInit,Inject,Host } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import {FetchJsonPipe} from './fetch-json.pipe'
import {Config} from './toh.config'
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/toh/heroes.component.html',
  styleUrls:  ['app/toh/heroes.component.css'],
  directives: [HeroDetailComponent],
  pipes:[FetchJsonPipe]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero;
  errorMessage: string;

  constructor(@Inject('toh.config') private _config: Config,
    @Host() private _router: Router,
    private _heroService: HeroService) { }

  getHeroes() {
    // this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    this._heroService.getHeroes()
        .subscribe(
            heroes => this.heroes.push(...heroes),
            error =>  this.errorMessage = <any>error);
  }
  addHero (name: string) {
    if (!name) {return;}
    this._heroService.addHero(name)
        .subscribe(
            hero  => this.heroes.push(hero),
            error =>  this.errorMessage = <any>error);
  }
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/