import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from '../core/component/footer/footer.module';
import { ArchiveInfoCardModule } from '../core/component/cards/archive-info-card/archive-info-card.module';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    VideoRoutingModule,
    HttpClientModule,
    FooterModule,
    ArchiveInfoCardModule
  ]
})
export class VideoModule {
}
