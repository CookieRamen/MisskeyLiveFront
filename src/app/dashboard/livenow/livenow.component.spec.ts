import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivenowComponent } from './livenow.component';

describe('LivenowComponent', () => {
  let component: LivenowComponent;
  let fixture: ComponentFixture<LivenowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivenowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivenowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
