import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveInfoCardComponent } from './live-info-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TimeagoModule } from 'ngx-timeago';

describe('LiveInfoCardComponent', () => {
  let component: LiveInfoCardComponent;
  let fixture: ComponentFixture<LiveInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TimeagoModule.forRoot(),
      ],
      declarations: [LiveInfoCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
