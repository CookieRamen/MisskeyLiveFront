import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveRoutingModule } from './live-routing.module';
import { LiveComponent } from './live.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentModule } from '../core/component/comment/comment.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterModule } from '../core/component/footer/footer.module';
import { ArchiveInfoCardModule } from '../core/component/cards/archive-info-card/archive-info-card.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [LiveComponent],
  imports: [
    CommonModule,
    LiveRoutingModule,
    HttpClientModule,
    CommentModule,
    FontAwesomeModule,
    FooterModule,
    MarkdownModule.forRoot(),
  ]
})
export class LiveModule {
}
