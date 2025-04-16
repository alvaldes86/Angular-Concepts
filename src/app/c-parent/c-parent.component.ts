import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-c-parent',
  standalone: false,
  templateUrl: './c-parent.component.html',
  styleUrl: './c-parent.component.css'
})
export class CParentComponent {
  // products = [
  //     { name: 'Awesome Product', description: 'This is an awesome product.', price: 99.99, imageUrl: 'https://via.placeholder.com/150' },
  //     { name: 'Another Product', description: 'This is another product.', price: 49.99, imageUrl: 'https://via.placeholder.com/150' }
  //   ];
}
