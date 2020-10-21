import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { UserRedirectGuard } from './core/guard/user-redirect.guard';

export function userMatcher(url) {
  if (url.length !== 1 || !url[0].path.startsWith('@')) {
    return null;
  }
  return {
    consumed: url,
    posParams: {
      id: new UrlSegment(url[0].path.substring(1), {})
    }
  };
}

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
    path: 'live_chat',
    loadChildren: () => import('./core/component/comment/comment.module').then(m => m.CommentModule)
  },
  {
    matcher: userMatcher,
    loadChildren: () => import('./live/live.module').then(m => m.LiveModule)
  },
  {
    path: 'v',
    loadChildren: () => import('./video/video.module').then(m => m.VideoModule)
  },
  {
    path: ':id',
    canActivate: [UserRedirectGuard],
    loadChildren: () => import('./live/live.module').then(m => m.LiveModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
