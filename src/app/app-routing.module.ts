import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';
import {RecipesComponent} from "./pages/recipes/recipes.component";


const routes: Routes = [

  { path: '',component:RecipesComponent },
  {
    path: 'userprofile',
    loadChildren: () => import('src/app/pages/userprofile/userprofile.module').then(m => m.UserProfileModule),
    canActivate: [AuthGuardService]
  },

  {
    path: 'editprofile',
    loadChildren: () => import('src/app/pages/editprofile/editprofile.module').then(m => m.EditProfileModule),
    canActivate: [AuthGuardService]
  },

  {
    path: 'recipes',
    loadChildren: () => import('src/app/pages/recipes/recipes.module').then(m => m.RecipesModule),
    // canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'providers',
    loadChildren: () => import('src/app/pages/providers/providers.module').then(m => m.ProvidersModule),
    canActivate: [AuthGuardService]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
