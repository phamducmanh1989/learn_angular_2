import {OpaqueToken} from 'angular2/core';

export let APP_CONFIG = new OpaqueToken('toh.config');

export interface Config {
    apiEndpoint: string,
    title: string
}

export const CONFIG:Config = {
    apiEndpoint: 'app/heroes',//    app/heroes.json
    title: 'Dependency Injection'
};

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */