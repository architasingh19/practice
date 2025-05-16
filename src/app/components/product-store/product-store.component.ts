import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.scss'],
  standalone : true,
  imports:[CommonModule,RouterModule,ProductDetailsComponent]
})
export class ProductStoreComponent {

  products : any[] = []
  errorMessage: string = '';

  constructor(private productService : CommonService, private router :Router,  private route: ActivatedRoute  ){

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

// product-store.component.ts
navigateToProduct(productId: number): void {
  this.router.navigate([productId], { relativeTo: this.route });
}

}
