import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: false,
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() img: string = "Valor inicial";
  @Output() loaded = new EventEmitter<string>();
  imageDefault = "images/default.png";

  constructor() {
    // before render
    // no correr nada asincrono aqui (async)
    // esto solo corre una vez
    console.log('Constructor', 'imgValue =>', this.img);
  }

  ngOnInit() {
    // before render
    // si podemos correr cosas asincronas (async)
    // corre una sola vez
    console.log('ngOnInit', 'imgValue =>', this.img);
  }

  ngAfterViewInit() {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnChanges() {
    // before and during render
    // changes inputs -- several times
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnDestroy() {
    // delete component
    console.log('ngOnDestroy');
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}