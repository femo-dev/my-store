import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  imgParent = ''; //https://www.w3schools.com/howto/img_avatar.png
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

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}