import { Component, Input, Output, EventEmitter, OnInit, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  standalone: false,
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img =>', this.img);
  }
  @Input() alt: string = "Valor inicial";
  @Output() loaded = new EventEmitter<string>();
  imageDefault = "images/default.png";
  counter = 0;
  counterFn: number | undefined;

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
    // this.counterFn = window.setInterval(() => {
    //   this.counter +=1;
    //   console.log('run counter');
    // }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    // changes inputs -- several times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnDestroy() {
    // delete component
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}