import {Component}        from 'angular2/core';
import {JSONP_PROVIDERS}  from 'angular2/http';
import {Observable}       from 'rxjs/Observable';

import {WikipediaService} from './wiki.service';

@Component({
    selector: 'my-wiki',
    template: `
    <div class="container">
        <h1>Wikipedia Demo</h1>
        <form>
            <div class="form-group">
             <label>Fetches after each keystroke</label>

            <input class="form-control"#term (keyup)="search(term.value)"/>
            
            <ul>
              <li *ngFor="#item of items | async">{{item}}</li>
            </ul>
            </div>
        </form>
    </div>
    
    
   
  `,
    providers:[JSONP_PROVIDERS, WikipediaService]
})
export class WikiComponent {

    constructor (private _wikipediaService: WikipediaService) {}

    items: Observable<string[]>;

    search (term: string) {
        this.items = this._wikipediaService.search(term);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */