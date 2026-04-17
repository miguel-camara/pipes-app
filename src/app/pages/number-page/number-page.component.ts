import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'number-page',
  imports: [DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './number-page.component.html',
})
export default class NumberPageComponent {
  totalSells = signal(2_423_345.358945);
  percent = signal(0.57633);
}
