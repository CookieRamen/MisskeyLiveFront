import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CommentComponent],
  exports: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbTooltipModule
  ]
})
export class CommentModule {
}
