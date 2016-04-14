import { bootstrap }    from 'angular2/platform/browser';
import { TohComponent } from './toh/toh.component';
import {WikiComponent}        from './wiki/wiki.component';
import {WikiSmartComponent} from './wiki/wiki-smart.component';
import 'rxjs/Rx';
bootstrap(TohComponent);
bootstrap(WikiComponent);
bootstrap(WikiSmartComponent);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/