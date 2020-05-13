import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveInfoCardComponent } from './live-info-card.component';
import { TimeagoModule } from 'ngx-timeago';


@NgModule({
  declarations: [LiveInfoCardComponent],
  imports: [
    CommonModule,
    TimeagoModule.forRoot()
  ]
})
export class LiveInfoCardModule {
}
