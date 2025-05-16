import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface Image{
  src:string,
  alt:string
}
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private images: Image[] = [
    {
      src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel1.jpg',
      alt: 'nature',
    },
    {
      src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel2.jpg',
      alt: 'Beach',
    },
    {
      src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel3.jpg',
      alt: 'Yak',
    },
    {
      src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel4.jpg',
      alt: 'Hay',
    },
    {
      src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel5.jpg',
      alt: 'Plants',
    },
    {
      src: 'https://do6gp1uxl3luu.cloudfront.net/question-webp/image-carousel6.jpg',
      alt: 'Building',
    },
  ];

  private baseUrl ='https://dummyjson.com/products';

  constructor(private http : HttpClient) { }

  getAllProduct() : Observable<any>{
    return this.http.get<any>(this.baseUrl).pipe(
      catchError(error => {
        console.error('error in fetching',error);
        return throwError(()=>' Failed to load products.')
      })
    )
  }

  getProductById(productId: number): Observable<any> {
    console.log("hii")
    return this.http.get<any>(`${this.baseUrl}/${productId}`).pipe(
      catchError(error => {
        console.error('Error fetching product details:', error);
        return throwError(() => 'Failed to load product details.');
      })
    );
  }

  //image carousel
  getImage(){
    return this.images;
  }
}
