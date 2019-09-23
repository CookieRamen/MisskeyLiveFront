import {NgModule} from '@angular/core';
import {RouterModule, Routes, UrlSegment} from '@angular/router';
import {AuthGuard} from './core/guard/auth.guard';
import {UserRedirectGuard} from './core/guard/user-redirect.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)
  },
  {
    matcher: (url) => {
      if (url.length !== 1 || !url[0].path.startsWith('@')) {
        return null;
      }
      return {
        consumed: url,
        posParams: {
          id: new UrlSegment(url[0].path.substring(1), {})
        }
      };
    },
    loadChildren: () => import('./live/live.module').then(m => m.LiveModule)
  },
  {
    path: ':id',
    canActivate: [UserRedirectGuard],
    loadChildren: () => null
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
