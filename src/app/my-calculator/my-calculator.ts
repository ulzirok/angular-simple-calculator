import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

interface ICalcGroup {
  first: ICalcVar
  second: ICalcVar
  operation: CalcOperations;
}

interface ICalcVar {
  value: number
  modificator: CalcModifiers;
}

enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/',
}

enum CalcModifiers {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  square = 'square',
}

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-calculator.html',
  styleUrl: './my-calculator.scss'
})
export class MyCalculator {
  public calcOperations = CalcOperations //инициализируем значение енама в переменную
  public calcModifiers = CalcModifiers
  public calcGroups: ICalcGroup[] = [
    {
      first: {
        value: 5,
        modificator: CalcModifiers.none
      },
      second: {
        value: 5,
        modificator: CalcModifiers.none
      },
      operation: CalcOperations.plus
    }
  ]
  
  public history: string[] = []
  
  public operationsBetweenGroup: CalcOperations[] = []

  public result?: number; //тип number или undefined, По умолчанию undefined
  
  public addGroup(): void {
    this.calcGroups.push({
        first: {
          value: 0,
          modificator: CalcModifiers.none
        },
        second: {
          value: 0,
          modificator: CalcModifiers.none
        },
        operation: CalcOperations.plus
    })
    
    this.operationsBetweenGroup.push(this.calcOperations.plus)
      
  }
  
  public removeGroup(index: number): void {
    this.calcGroups.splice(index, 1)
  }
  
  public calcGroup() {

    let result = 0;

    let tempHistory: string[] = [];

    this.calcGroups.forEach((group, i) => {
      if (i === 0) {
        result = this.calc(this.calcValueWithModif(group.first), this.calcValueWithModif(group.second), group.operation);
      } else {
        let tempResult = this.calc(this.calcValueWithModif(group.first), this.calcValueWithModif(group.second), group.operation);
        result = this.calc(result, tempResult, this.operationsBetweenGroup[i - 1]);
      }
      tempHistory.push(
        `
        (
          ${group.first.modificator !== CalcModifiers.none ? group.first.modificator : ''} ${group.first.value}
          ${group.operation}
          ${group.second.modificator !== CalcModifiers.none ? group.second.modificator : ''} ${group.second.value}
          )
        `);
    });

    tempHistory.push(`= ${result}`);
    this.history.push(tempHistory.join(' '));

    this.result = result;

  }
  
  public calcValueWithModif(value: ICalcVar): number {
    switch (value.modificator) {
      case CalcModifiers.none:
        return value.value;
      case CalcModifiers.cos:
        return Math.cos(value.value);
      case CalcModifiers.sin:
        return Math.sin(value.value);
      case this.calcModifiers.square:
        return Math.pow(value.value, 2)
    }
  }
  
  public calc(first: number, second: number, operation: CalcOperations): number {
    switch (operation) {
      case CalcOperations.plus:
        return first + second;
      case CalcOperations.minus:
        return first - second;
      case CalcOperations.multiply:
        return first * second;
      case CalcOperations.divide:
        return first / second;
    }
  }
  
}
