import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LiveRoutingModule} from './live-routing.module';
import {LiveComponent} from './live.component';
import {HttpClientModule} from '@angular/common/http';
import {CommentModule} from '../core/component/comment/comment.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LiveComponent],
  imports: [
    CommonModule,
    LiveRoutingModule,
    HttpClientModule,
    CommentModule,
    FontAwesomeModule
  ]
})
export class LiveModule {
}
