import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonService , Image} from 'src/app/common.service';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
  standalone: true,
  imports : [CommonModule],
  providers: [CommonService]
})
export class ImageCarouselComponent {

  images: Image[] = [];
  currentIndex: number = 0;

  constructor(private imageService: CommonService) {}

  // ngOnInit(): void {
  //   this.images = this.imageService.getImage();
  // }

  // get hasImages(): boolean {
  //   return this.images.length > 0;
  // }

  // previous(): void {
  //   if (this.currentIndex > 0) {
  //     this.currentIndex--;
  //   } else {
  //     this.currentIndex = this.images.length - 1;
  //   }
  // }

  // next(): void {
  //   if (this.currentIndex < this.images.length - 1) {
  //     this.currentIndex++;
  //   } else {
  //     this.currentIndex = 0;
  //   }
  // }

  // goToImage(index: number): void {
  //   this.currentIndex = index;
  // }

  ngOnInit(){
    this.images = this.imageService.getImage();
  }

  get hasImage() : boolean{
    return this.images.length > 0;
  }
  previous(){
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    console.log(this.currentIndex)
  }
  next(){
    this.currentIndex = (this.currentIndex + 1) % this.images.length
  }
  goToImage(index : number):void{

    this.currentIndex = index
  }
}
