import { HEROES } from './mock-heroes';
import {Injectable,Inject}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Hero}           from './hero';
import {Observable}     from 'rxjs/Observable';
import {Config} from './toh.config'

@Injectable()
export class HeroService {
  constructor (@Inject('toh.config') private _config: Config,private http: Http) {}
  
  getHeroes () {
    return this.http.get(this._config.apiEndpoint)
        .map(res => <Hero[]> res.json().data)
        .do(data => console.log(data)) // eyeball results in the console
        .catch(this.handleError);

  }

  addHero (name: string) : Observable<Hero>  {

    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._config.apiEndpoint, body, options)
        .map(res =>  <Hero> res.json().data)
        .catch(this.handleError)
  }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
/* promise
  getHeroes () {
    return this.http.get(this._heroesUrl)
        .toPromise()
        .then(res => <Hero[]> res.json().data)
        .then(data => { console.log(data); return data; }) // eyeball results in the console
        .catch(this.handleError);
  }
  addHero (name: string) : Promise<Hero> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._heroesUrl, body, options)
        .toPromise()
        .then(res => <Hero> res.json().data)

  }
  private handleError (error: any) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Promise.reject(error.message || error.json().error || 'Server error');
  }
  */
  getHero(id: number) {
    return Promise.resolve(HEROES).then(
        heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */

