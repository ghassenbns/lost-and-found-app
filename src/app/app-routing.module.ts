import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicationViewComponent } from './home/publications/publication-view/publication-view.component';
import { PublicationsComponent } from './home/publications/publications.component';
import { SignalerComponent } from './home/signaler/signaler.component';
import { LoginComponent } from './login/login.component';
import { RedirectionComponent } from './redirection/redirection.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: RedirectionComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'publications',
        component: PublicationsComponent,
        pathMatch: 'full',
      },
      {
        path: 'signaler',
        component: SignalerComponent,
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: PublicationViewComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
