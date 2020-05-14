import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveInfoCardComponent } from './live-info-card.component';
import { TimeagoModule } from 'ngx-timeago';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LiveInfoCardComponent],
  exports: [
    LiveInfoCardComponent
  ],
  imports: [
    CommonModule,
    TimeagoModule.forRoot(),
    RouterModule
  ]
})
export class LiveInfoCardModule {
}
