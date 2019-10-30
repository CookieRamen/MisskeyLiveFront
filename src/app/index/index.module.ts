import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndexRoutingModule} from './index-routing.module';
import {IndexComponent} from './index.component';
import {LiveInfoCardComponent} from '../core/component/cards/live-info-card/live-info-card.component';
import {HttpClientModule} from '@angular/common/http';
import { ArchiveInfoCardComponent } from '../core/component/cards/archive-info-card/archive-info-card.component';

@NgModule({
  declarations: [IndexComponent, LiveInfoCardComponent, ArchiveInfoCardComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    HttpClientModule,
  ]
})
export class IndexModule {
}
