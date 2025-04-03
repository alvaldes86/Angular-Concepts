import { Component } from '@angular/core';
import { empty } from 'rxjs';


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

  isLoggedin: boolean = false;

  errorMessage:string = "Error: Something went wrong!";

  isLoading: boolean = false;

  data: string = "Display some records";

  numbers: number[] = [];
  names: string[] = ['Alain', 'John', 'Doe', 'Jane'];

  //declare object using type anotation
  products: { name: string; description: string; price: number }[] = [
    { name: "Laptop", description: "A powerful gaming laptop", price: 1500 },
    { name: "Smartphone", description: "A latest-gen smartphone", price: 999 },
    { name: "Headphones", description: "Noise-canceling over-ear headphones", price: 199 }
  ];



  //using an interface to define the type of the object
  // interface Product {
  //   name: string;
  //   description: string;
  //   price: number;
  // }

  // const products: Product[] = [
  //   {
  //     name: "Laptop",
  //     description: "A powerful gaming laptop",
  //     price: 1500
  //   },
  //   {
  //     name: "Smartphone",
  //     description: "A latest-gen smartphone with an amazing camera",
  //     price: 999
  //   },
  //   {
  //     name: "Headphones",
  //     description: "Noise-canceling over-ear headphones",
  //     price: 199
  //   }
  // ];

  menuItems = ['Home', 'About', 'Services', 'Contact', 'Blog'];


  menuItem: string = 'simple';
  //methods

  //display the corresponding menu item
  public showSelectedMenuItem(element: string){
    this.menuItem = element;
  }


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
