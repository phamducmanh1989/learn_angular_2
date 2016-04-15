import {Component, Input} from 'angular2/core';
import {ControlGroup}     from 'angular2/common';
import {QuestionBase}     from './question-base';

@Component({
    selector:'df-question',
    templateUrl:'./app/toh/dynamic-form/dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
    @Input() question:QuestionBase<any>;
    @Input() form:ControlGroup;
    get isValid() { return this.form.controls[this.question.key].valid; }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */