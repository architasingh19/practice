import { Component } from '@angular/core';
import { FilterRecipeComponent } from 'src/app/filter-recipe/filter-recipe.component';
import { GuessNumberGameComponent } from 'src/app/guess-number-game/guess-number-game.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports : [GuessNumberGameComponent,FilterRecipeComponent]
})
export class AboutComponent {

}
