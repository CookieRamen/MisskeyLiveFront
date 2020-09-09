import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SessionService } from '../core/service/session.service';
import { OgpService } from '../services/ogp.service';

export interface VideoData {
  description: string;
  isOwner: boolean;
  lock: number;
  public: number;
  stream: string;
  timestamp: string;
  title: string;
  user: string;
  thumbnail: string;
}

interface ArchiveList {
  id: string;
  title: string;
  timestamp: string;
  thumbnail: string;
  duration: number;
}

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  video: SafeResourceUrl;
  videoId = '404';
  videoData: VideoData;
  archiveData: ArchiveList[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private ogpService: OgpService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.id) {
        return;
      }
      this.videoId = params.id;
      this.playerInit();
    });
  }

  playerInit() {
    // load player
    this.video = this.sanitizer.bypassSecurityTrustResourceUrl(
      `${environment.api}/embed/archive/${this.videoId}?i=${SessionService.token}`
    );

    // load video data
    this.httpClient.get<VideoData>(`${environment.api}/api/archives/${this.videoId}?i=${SessionService.token}`)
      .subscribe(
        data => {
          this.videoData = data;
          this.ogpService.setMetaTag({
            title: this.videoData.title + ' - MisskeyLive',
            desc: this.videoData.description,
            img: this.videoData.thumbnail,
            type: 'article'
          });
          this.httpClient.get<ArchiveList[]>(`${environment.api}/api/archives/list/${data.user}`)
            .subscribe(list => {
              this.archiveData = list;
            });
        },
        () => {
          this.videoData = {
            user: null,
            description: '',
            title: '',
            timestamp: '',
            isOwner: false,
            stream: '',
            lock: 0,
            public: 0,
            thumbnail: ''
          };
        });
  }

}
