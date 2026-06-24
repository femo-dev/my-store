import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: false,
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent {
  @Input() img: string = "Valor inicial";
  @Output() loaded = new EventEmitter<string>();
  imageDefault = "images/default.png";

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}