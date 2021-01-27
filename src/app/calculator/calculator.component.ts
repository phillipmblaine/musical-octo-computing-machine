import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  constructor() { }

  currentNumber: string = '0';
  firstOperand: null | string | number = null;
  firstOperandStatus: null | string | number = null;
  operator: null | string = null;
  operatorStatus: null | string | number = null;
  waitForSecondNumber: boolean = false;

  public getNumber(v: string) {
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = v : this.currentNumber += v;
    }
    this.displayFirstOperandStatus();
    this.displayOperatorStatus();
  }

  public getOperation(op: string) {
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

  public clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
    this.displayFirstOperandStatus();
    this.displayOperatorStatus();
  }

  private doCalculation(op: string, secondOp: number) {
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
    if (this.firstOperand === null) {
      this.firstOperandStatus = "First operand is null."
    } else {
      if (typeof(this.firstOperand) === 'number' && typeof(this.firstOperandStatus) === 'number') {
        this.firstOperandStatus = this.firstOperand;
      }
    }
  }

  public displayOperatorStatus(): void {
    if (this.operator === null) {
      this.operatorStatus = "Operator is null."
    } else {
      this.operatorStatus = this.operator;
    }
  }

  public getDecimal(): void {
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

  public checkNullOperator(): string {
    if (this.operator === null) {
      return 'orangeText';
    } else {
      return 'purpleText';
    }
  }

  public checkCurrentNumber(): string {
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
