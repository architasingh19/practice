import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.scss'],
  standalone : true,
  imports:[CommonModule,RouterModule]
})
export class ProductStoreComponent {

  products : any[] = []
  errorMessage: string = '';

  constructor(private productService : CommonService, private router :Router){

  }

  ngOnInit(){
    this.loadingProduct()
  }

  loadingProduct(){
    this.productService.getAllProduct().subscribe({
      next : (response) => (this.products = response.products),
      error : (error) => (this.errorMessage = error)
    });
  }

  navigateToProduct(productId: number): void {
    this.router.navigate(['/product-store', productId]);
  }
}
