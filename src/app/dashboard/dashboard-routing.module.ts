import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './index/index.component';
import { SettingsComponent } from './settings/settings.component';
import { ArchivesComponent } from './archives/archives.component';
import { LivenowComponent } from './livenow/livenow.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      }, {
        path: 'settings',
        component: SettingsComponent
      }, {
        path: 'archives',
        component: ArchivesComponent
      }, {
        path: 'livenow',
        component: LivenowComponent
      }, {
        path: '**',
        redirectTo: 'index',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
