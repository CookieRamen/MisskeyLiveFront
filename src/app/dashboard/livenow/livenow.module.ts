import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivenowRoutingModule } from './livenow-routing.module';
import { LivenowComponent } from './livenow.component';


@NgModule({
  declarations: [LivenowComponent],
  imports: [
    CommonModule,
    LivenowRoutingModule
  ]
})
export class LivenowModule { }
