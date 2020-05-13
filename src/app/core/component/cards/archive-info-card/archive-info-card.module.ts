import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveInfoCardComponent } from './archive-info-card.component';
import { TimeagoModule } from 'ngx-timeago';


@NgModule({
  declarations: [ArchiveInfoCardComponent],
  exports: [
    ArchiveInfoCardComponent
  ],
  imports: [
    CommonModule,
    TimeagoModule.forRoot()
  ]
})
export class ArchiveInfoCardModule {
}
