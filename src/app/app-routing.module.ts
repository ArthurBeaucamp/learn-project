import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LearnComponent } from './pages/learn/learn.component';
import { LibraryComponent } from './pages/library/library.component';
import { ProfileComponent } from './pages/profile/profile.component';

export enum routeName {
  home = 'home',
  library = 'library',
  learn = 'learn',
  profile = 'profile',
}

const routes: Routes = [
  {
    path: routeName.home,
    component: HomeComponent,
  },
  {
    path: routeName.library,
    component: LibraryComponent,
  },
  {
    path: routeName.learn,
    component: LearnComponent,
  },
  {
    path: routeName.profile,
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
