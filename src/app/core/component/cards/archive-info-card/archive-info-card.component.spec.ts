import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveInfoCardComponent } from './archive-info-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArchiveInfoCardComponent', () => {
  let component: ArchiveInfoCardComponent;
  let fixture: ComponentFixture<ArchiveInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ArchiveInfoCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
