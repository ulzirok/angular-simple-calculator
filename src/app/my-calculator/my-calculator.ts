import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-calculator.html',
  styleUrl: './my-calculator.scss'
})
export class MyCalculator {
  public first: number = 1 //инициализируемое значение
  public second: number = 1; //инициализируемое значение
  
  public operation: string = '+'; //инициализируемое значение
  
  public operations: string[] = ['+', '-', '*', '/']; //массив всех операции
  
  public result?: number; //тип number или undefined, По умолчанию undefined
  
  public calc() {
    if (this.operation) {
      switch (this.operation) {
        case '+':
          this.result = this.first + this.second
          break;
        case '-':
          this.result = this.first - this.second
          break;
        case '*':
          this.result = this.first * this.second
          break;
        case '/':
          this.result = this.first / this.second
          break;
      
        default:
          break;
      }
    }
  }
  
}
