import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { IndexComponent } from './index/index.component';
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchivesComponent } from './archives/archives.component';
import { SettingsComponent } from './settings/settings.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { OrderModule } from 'ngx-order-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LivenowComponent } from './livenow/livenow.component';
import { FooterModule } from '../core/component/footer/footer.module';

@NgModule({
  declarations: [
    DashboardComponent,
    IndexComponent,
    ArchivesComponent,
    SettingsComponent,
    LivenowComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    ClipboardModule,
    SweetAlert2Module.forRoot(),
    NgbCollapseModule,
    GridModule,
    OrderModule,
    FontAwesomeModule,
    NgbTooltipModule,
    FooterModule
  ]
})
export class DashboardModule {
}
