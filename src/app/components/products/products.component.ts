import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Automobil de juguete',
      price: 100,
      image: './images/image1.png'
    },
    {
      id: 2,
      name: 'Muñeca de trapo',
      price: 180,
      image: './images/image2.png'
    },
    {
      id: 3,
      name: 'Pelota de futbol',
      price: 120,
      image: './images/image3.png'
    }
  ];
}
