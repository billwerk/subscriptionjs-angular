import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {LoaderComponent} from './components/loader/loader.component';
import {PortalComponent} from './components/portal/portal.component';
import {SignupComponent} from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'page-not-found',
    component: NotFoundPageComponent
  },
  {
    path: 'loader',
    component: LoaderComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'portal',
    component: PortalComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
