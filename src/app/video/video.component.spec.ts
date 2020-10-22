import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponent } from './video.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from '../core/component/footer/footer.module';
import { MarkdownModule } from 'ngx-markdown';
import { VideoRoutingModule } from './video-routing.module';
import { ArchiveInfoCardModule } from '../core/component/cards/archive-info-card/archive-info-card.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        VideoRoutingModule,
        HttpClientTestingModule,
        FooterModule,
        ArchiveInfoCardModule,
        MarkdownModule.forRoot(),
      ],
      declarations: [VideoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
