import {Injectable}   from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {QuestionBase} from './question-base';

@Injectable()
export class QuestionControlService {
    constructor(private _fb:FormBuilder){ }

    toControlGroup(questions:QuestionBase<any>[] ) {
        let group = {};

        questions.forEach(question => {
            group[question.key] = question.required ? [question.value || '', Validators.required] : [];
        });
        return this._fb.group(group);
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */