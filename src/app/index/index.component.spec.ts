import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IndexComponent} from './index.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LiveInfoCardComponent} from '../core/component/cards/live-info-card/live-info-card.component';
import { ArchiveInfoCardComponent } from '../core/component/cards/archive-info-card/archive-info-card.component';
import { FooterModule } from '../core/component/footer/footer.module';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FooterModule,
      ],
      declarations: [IndexComponent, LiveInfoCardComponent, ArchiveInfoCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
