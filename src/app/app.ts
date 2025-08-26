import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCalculator } from './my-calculator/my-calculator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyCalculator],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
