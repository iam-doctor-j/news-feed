import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsLoaderComponent } from './posts-loader/posts-loader.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: 'feed', pathMatch: 'full'},
  {path: 'feed', component: PostsLoaderComponent},
  {path: 'auth', component: AuthComponent, children: [
    {path: '', redirectTo: 'signin', pathMatch: 'full'},
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
