import { Component } from '@angular/core';


@Component({
  selector: 'app-typescript-concepts',
  standalone: false,
  templateUrl: './typescript-concepts.component.html',
  styleUrl: './typescript-concepts.component.css'
})
export class TypescriptConceptsComponent {
//properties
  counter: number = 0;
  number1: number  = 2;
  number2 = 3;

  name: string = 'Alain';

  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  //this card property can't be declared using the const, let or var keyword
  //since it is a class property or class member
  cars = {
    brand: 'toyota',
    model: 'corolla',
    year: 2020,
  };

  backgroundColor = 'green';

  isButtonDisable: boolean = true;

  isSpecialFont: boolean = true;

  buttonLabel: string = 'Submit form';


  propertyEvent: string = '';

  user = {
    firstName: '',
    lastName: ''
  };
  //methods
public increment(): void {
  this.counter++;
}

public objectContainer(): void {
  //this car object can be declared using the const, let or var keyword
  //because it is inside a function or method
  const cars: {brand: string, model: string, year: number } = {
    brand: 'toyota',
    model: 'corolla',
    year: 2020,
  }

  //you can also let the transpiler to infer the object type
  const trucks = {
    brand: 'toyota',
    model: 'hilux',
    year: 2020,
  }
//variable
  let maker: string = 'toyota';
}

public printHelllo(): string {
  return 'Hello World!';
}

isVisible: boolean = false;
public toggleVisibility(): void {
  this.isVisible = !this.isVisible;
}

inputValue: string = '';
public updateInputValue(event: Event): void {
  this.inputValue = (event.target as HTMLInputElement).value;//recomended casting. It cast event.target to HTMLInputElement
}

}
