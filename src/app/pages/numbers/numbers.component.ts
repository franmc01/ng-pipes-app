import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers',
  imports: [DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent {
  totalSells = signal(935978353.34554)
  percent = signal(0.345345)
}
