import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from '../core/component/footer/footer.module';
import { ArchiveInfoCardModule } from '../core/component/cards/archive-info-card/archive-info-card.module';
import { LiveInfoCardModule } from '../core/component/cards/live-info-card/live-info-card.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    HttpClientModule,
    FooterModule,
    ArchiveInfoCardModule,
    LiveInfoCardModule
  ]
})
export class IndexModule {
}
