import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  standalone :true,
  imports : [CommonModule]

})
export class ProductDetailsComponent {

  product: any = null;
  errorMessage: string = '';
  constructor(
    private route: ActivatedRoute,
    private productService: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    const numericId = Number(productId);
  
    console.log('Product ID:', numericId, 'Type:', typeof numericId);
  
    if (!isNaN(numericId)) {
      this.productService.getProductById(numericId).subscribe({
        next: (response) => (this.product = response),
        error: (error) => (this.errorMessage = error)
      });
    } else {
      this.errorMessage = 'Invalid product ID.';
    }
  }
  


  goBack(): void {
    this.router.navigate(['/product-store']);  
  }
  
}
