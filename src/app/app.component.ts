import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'roofing-corp';
  vaCurrentSlide: number = 0;
  images: any | []  = [
    {   
      counter: 1,
      img: '../assets/roofWork1.jpg'
    },
    {   
      counter: 2,
      img: '../assets/roofWork2.jpg'
    },
  ]

  ngOnInit(): void {
    this.onChangeImage();
  }

  onChangeImage() {
    setInterval(() => {
      if (this.vaCurrentSlide < this.images.length - 1) {
        console.log(this.vaCurrentSlide);
        this.vaCurrentSlide++;
      }
      else {
        this.vaCurrentSlide = 0
      }
    }, 3000)
  }

  onPreviousClick() {
    const previous = this.vaCurrentSlide - 1;
    this.vaCurrentSlide = previous < 0 ? this.images.length - 1 : previous
  }

  onNextClick() {
    const next = this.vaCurrentSlide + 1;
    this.vaCurrentSlide = next === this.images.length ? 0 : next;
  }

}
