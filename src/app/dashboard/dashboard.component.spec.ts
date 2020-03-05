import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ClipboardModule } from 'ngx-clipboard';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { OrderModule } from 'ngx-order-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FooterModule } from '../core/component/footer/footer.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ClipboardModule,
        SweetAlert2Module.forRoot(),
        NgbCollapseModule,
        GridModule,
        OrderModule,
        FontAwesomeModule,
        NgbTooltipModule,
        FooterModule,
      ],
      declarations: [DashboardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
