import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterModule } from '../core/component/footer/footer.module';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    VideoRoutingModule,
    HttpClientModule,
    FooterModule,
  ]
})
export class VideoModule { }
