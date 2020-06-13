import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeListComponent } from '../recipes/components/recipe-list/recipe-list.component';
import {Recipe} from "../../shared/models/recipe";
import { UserService } from "../../shared/services/user.service";


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html' ,
  styleUrls: ['./userprofile.component.scss']
})
export class UserProfileComponent implements OnInit {

  isLoggedIn: boolean;
  username: string;


  constructor( private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    this.userService.username.subscribe((data: string) => this.username = data);
  }

}
