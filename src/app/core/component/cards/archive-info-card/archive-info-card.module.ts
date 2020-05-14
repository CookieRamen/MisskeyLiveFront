import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveInfoCardComponent } from './archive-info-card.component';
import { TimeagoModule } from 'ngx-timeago';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ArchiveInfoCardComponent],
  exports: [
    ArchiveInfoCardComponent
  ],
  imports: [
    CommonModule,
    TimeagoModule.forRoot(),
    RouterModule
  ]
})
export class ArchiveInfoCardModule {
}
