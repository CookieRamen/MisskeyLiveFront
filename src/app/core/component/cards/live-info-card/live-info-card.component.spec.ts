import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveInfoCardComponent } from './live-info-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LiveInfoCardComponent', () => {
  let component: LiveInfoCardComponent;
  let fixture: ComponentFixture<LiveInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
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
