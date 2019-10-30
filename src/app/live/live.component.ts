import {Component, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

export interface Data {
  status: string;
  title?: string;
  description?: string;
  message?: string;
  server?: string;
}

interface ArchiveList {
  user: string;
  id: string;
  title: string;
  timestamp: string;
  thumbnail: string;
  duration: number;
}

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit, OnDestroy {
  video: SafeResourceUrl;
  userId = '404';
  userData: Data;
  online: boolean;
  fail = false;
  failCount = 0;
  archiveData: ArchiveList[] = [];
  checkIntervalId: number;

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.id) {
        return;
      }
      this.userId = params.id;
      this.playerInit();
      this.httpClient.get<ArchiveList[]>(`${environment.api}/api/archives/list/${this.userId}`)
        .subscribe(data => {
          this.archiveData = data;
        });
    });
  }

  ngOnDestroy() {
    if (this.checkIntervalId !== undefined) {
      clearInterval(this.checkIntervalId);
    }
  }

  playerInit() {
    // load player
    this.video = this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.api}/embed/${this.userId}`);

    // load user data
    this.httpClient.get<Data>(`${environment.api}/api/data/${this.userId}`).subscribe(data => {
      if (data.status === 'OK') {
        this.userData = data;
        this.liveCheck();
        this.checkIntervalId = window.setInterval(() => this.liveCheck(), 5000);
      } else {
        this.userData = {
          status: data.status,
          title: 'User not found.',
          description: data.message
        };
      }
    });
  }

  liveCheck() {
    this.httpClient.get(`https://hls-${this.userData.server}.arkjp.net/${this.userId}/index.m3u8`, {responseType: 'text'})
      .subscribe(() => {
        if (this.fail === false) {
          this.online = true;
        } else {
          setTimeout(() => {
            this.online = true;
            this.fail = false;
          }, 8000);
        }
      }, () => {
        this.failCount++;
        if (this.failCount > 5) {
          this.online = false;
          this.fail = true;
          this.failCount = 0;
        }
      });
  }

  popupChat() {
    window.open(`/live_chat/${this.userId}`, '', 'width=500,height=600');
  }
}
