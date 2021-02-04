import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  constructor() { }

  public currentNumber: string = '0';
  public firstOperand: null | string | number = null;
  public firstOperandStatus: null | string | number = null;
  public operator: null | string = null;
  public operatorStatus: null | string | number = null;
  public waitForSecondNumber: boolean = false;

  public getNumber(v: string): void {
    console.log('calculator -> getNumber(string): void');
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;
    }
    this.displayFirstOperandStatus();
    this.displayOperatorStatus();
  }

  public getOperation(op: string): void {
    console.log('calculator -> getOperation(string): void');
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
    console.log(this.firstOperand);
    this.displayFirstOperandStatus();
    this.displayOperatorStatus();
  }

  public clear(): void {
    console.log('calculator -> clear(): void');
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
    this.displayFirstOperandStatus();
    this.displayOperatorStatus();
  }

  private doCalculation(op: string, secondOp: number): number {
    console.log('calculator -> doCalculation(string, number): number');
    if (typeof (this.firstOperand) === 'number') {
      switch (op) {
        case '+':
          return this.firstOperand += secondOp;
        case '-':
          return this.firstOperand -= secondOp;
        case '*':
          return this.firstOperand *= secondOp;
        case '/':
          return this.firstOperand /= secondOp;
        case '=':
          return secondOp;
      }
    }
  }

  public displayFirstOperandStatus(): void {
    console.log('calculator -> displayFirstOperandStatus(): void');
    if (this.firstOperand === null) {
      this.firstOperandStatus = "First operand is null."
    } else {
      this.firstOperandStatus = this.firstOperand;
    }
    console.log('firstOperand:', this.firstOperand);
    console.log('firstOperandStatus:', this.firstOperandStatus);
  }

  public displayOperatorStatus(): void {
    console.log('calculator -> displayOperatorStatus(): void');
    if (this.operator === null) {
      this.operatorStatus = "Operator is null."
    } else {
      this.operatorStatus = this.operator;
    }
  }

  public getDecimal(): void {
    console.log('calculator -> getDecimal(): void');
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  // getter methods
  public get checkNullOperand(): string {
    if (this.firstOperand === null) {
      return 'redText';
    } else {
      return 'blueText';
    }
  }

  public get checkNullOperator(): string {
    if (this.operator === null) {
      return 'orangeText';
    } else {
      return 'purpleText';
    }
  }

  public get checkCurrentNumber(): string {
    if (this.currentNumber === '0') {
      return 'currentNumberZero';
    } else {
      return 'currentNumberNotZero';
    }
  }

  public ngOnInit(): void {
    console.log("Starting Calculator");
    this.displayFirstOperandStatus();
    this.displayOperatorStatus();
  }
}
