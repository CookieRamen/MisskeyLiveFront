import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArchiveInfoCardComponent } from './archive-info-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TimeagoModule } from 'ngx-timeago';

describe('ArchiveInfoCardComponent', () => {
  let component: ArchiveInfoCardComponent;
  let fixture: ComponentFixture<ArchiveInfoCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TimeagoModule.forRoot()
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
