import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/services/recipe.service';
import { UserService } from '../../shared/services/user.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user;
  recipes;
  recipeDetails;

  constructor(private userService: UserService, private recipeService: RecipeService) {

  }

  ngOnInit(): void {
    this.user = this.userService.getAuthenticatedUserSync();
    this.recipeService.getRecipes().subscribe(res => {
      this.recipes = res.filter(recipe => {
        return recipe.userId === this.user.id;
      });
    });

  }

}
