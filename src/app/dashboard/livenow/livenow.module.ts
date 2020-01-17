import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivenowRoutingModule } from './livenow-routing.module';
import { LivenowComponent } from './livenow.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [LivenowComponent],
  imports: [
    CommonModule,
    LivenowRoutingModule,
    HttpClientModule
  ]
})
export class LivenowModule { }
