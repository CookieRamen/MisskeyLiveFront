import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LivenowComponent} from './livenow.component';


const routes: Routes = [
  {
    path: '',
    component: LivenowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivenowRoutingModule { }
