import {Component} from 'angular2/core';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';

@Component({
    selector: 'power-boost-calculator',
    template: `
    <div class="container">
        <h2>Power Boost Calculator</h2>
        <form>
            <div class="from-group">
                <label for="power">Normal power: </label>
                <input class="form-control"[(ngModel)]="power">
            </div>
            <div class="from-group">
                <label for="factor">Boost factor: </label>
                <input type="text"  class="form-control" [(ngModel)]="factor">
            </div>
            <div class="from-group">
                <label for="factor">Super Hero Power new: </label>
                <input type="text" readonly="readonly" class="form-control" value="{{power | exponentialStrength: factor}}">
            </div>
        </form>
    </div>
  `,
    pipes: [ExponentialStrengthPipe]
})
export class PowerBoostCalculator {
    power = 5;
    factor = 1;
}
