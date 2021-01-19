import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  constructor() { }

  currentNumber = '0';
  firstOperand = null;
  firstOperandStatus = null;
  operator = null;
  operatorStatus = null;
  waitForSecondNumber = false;

  public getNumber(v: string) {
    console.log(v);
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
    console.log(op);

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

  private doCalculation(op, secondOp) {
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

  displayFirstOperandStatus(): void {
    if (this.firstOperand === null) {
      this.firstOperandStatus = "First operand is null."
    } else {
      this.firstOperandStatus = this.firstOperand;
    }
  }

  displayOperatorStatus(): void {
    if (this.operator === null) {
      this.operatorStatus = "Operator is null."
    } else {
      this.operatorStatus = this.operator;
    }
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  checkNullOperand() {
    if (this.firstOperand === null) {
      return 'redText';
    } else {
      return 'blueText';
    }
  }

  checkNullOperator() {
    if (this.operator === null) {
      return 'orangeText';
    } else {
      return 'purpleText';
    }
  }

  checkCurrentNumber() {
    if (this.currentNumber === '0') {
      return 'currentNumberZero';
    } else {
      return 'currentNumberNotZero';
    }
  }

  ngOnInit(): void {
    console.log("Starting Calculator");
    this.displayFirstOperandStatus();
    this.displayOperatorStatus();
  }


}
