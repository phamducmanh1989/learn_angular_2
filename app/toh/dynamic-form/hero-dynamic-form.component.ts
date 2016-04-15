import {Component}       from 'angular2/core'
import {DynamicForm}     from './dynamic-form.component';
import {QuestionService} from './question.service';

@Component({
    selector: 'hero-dynamic-form',
    template: `
    <div class="container">
      <h2>Job Application for Heroes</h2>
      <dynamic-form [questions]="questions"></dynamic-form>
    </div>
  `,
    directives: [DynamicForm],
    providers:  [QuestionService]
})
export class HeroDynamicFormComponent {
    questions:any[]

    constructor(service: QuestionService) {
        this.questions = service.getQuestions();
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */