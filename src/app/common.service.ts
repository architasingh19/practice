import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

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
    return this.http.get<any>(`${this.baseUrl}/${productId}`).pipe(
      catchError(error => {
        console.error('Error fetching product details:', error);
        return throwError(() => 'Failed to load product details.');
      })
    );
  }
}
