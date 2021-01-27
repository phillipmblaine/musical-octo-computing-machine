import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})

export class NameEditorComponent implements OnInit {

  constructor() { }

  randomNameSelector: number = 0;
  name: FormControl = new FormControl('Alex');
  numOne: number = this.getRandomIntInclusive(0, 100)

  public updateName(): void {
    this.randomNameSelector = this.getRandomIntInclusive(0, 4);
    console.log('randomNameSelector:', this.randomNameSelector);
    switch (this.randomNameSelector) {
      case 0:
        this.name.setValue('Bulbasaur');
        break;
      case 1:
        this.name.setValue('Charmander');
        break;
      case 2:
        this.name.setValue('Squirtle');
        break;
      case 3:
        this.name.setValue('Pikachu');
        break;
      default:
        this.name.setValue('Eevee');
    }

  }

  public getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public randomUpdates(): void {
    this.updateName();
    this.numOne = this.getRandomIntInclusive(0, 100);
  }

  public ngOnInit(): void { }
}