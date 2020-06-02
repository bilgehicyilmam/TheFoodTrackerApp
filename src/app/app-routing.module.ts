import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';


const routes: Routes = [
  {
    path: 'recipes',
    loadChildren: () => import('src/app/pages/recipes/recipes.module').then(m => m.RecipesModule),
    canActivate: [AuthGuardService]
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
