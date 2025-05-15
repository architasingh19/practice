import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeService , Recipe} from '../recipe.service';

@Component({
  selector: 'app-filter-recipe',
  templateUrl: './filter-recipe.component.html',
  styleUrls: ['./filter-recipe.component.scss'],
  imports:[CommonModule,FormsModule],
  standalone:true,
})
export class FilterRecipeComponent {

  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  cartCount: number = 0;
  selectedRating: string = "4.0";


  constructor(private recipeService: RecipeService) {
    this.loadRecipes();
  }

  loadRecipes(){
    this.recipes = this.recipeService.getRecipe();
    this.filterRecipes();
    this.updateCartCount();
  }
  filterRecipes() {
    const rating = parseFloat(this.selectedRating)
    this.filteredRecipes = this.recipeService.getFilteredByRating(rating);
  }

  addToCart(){
   this.recipeService.addToCart();
   this.updateCartCount()
  }

  updateCartCount() {
    this.cartCount = this.recipeService.getCartCount();
  }
  
  getAverageRating(){
    if (this.filteredRecipes.length === 0) return "0.00";
    const totalRating = this.filteredRecipes.reduce((sum, recipe) => sum + recipe.rating, 0);
    return (totalRating / this.filteredRecipes.length).toFixed(2)
  }
}
