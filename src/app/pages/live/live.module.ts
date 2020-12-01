import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveRoutingModule } from './live-routing.module';
import { LiveComponent } from './live.component';
import {FooterModule} from '../../components/footer/footer.module';


@NgModule({
  declarations: [LiveComponent],
    imports: [
        CommonModule,
        LiveRoutingModule,
        FooterModule
    ]
})
export class LiveModule { }
