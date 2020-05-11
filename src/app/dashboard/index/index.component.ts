import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../core/service/session.service';
import { environment } from '../../../environments/environment';

interface UserData {
  i?: string;
  server?: string;
  live_token?: string;
  title: string;
  description: string;
  auto_post: boolean;
  post_text: string;
}


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {
  @ViewChild('title') title: ElementRef;
  @ViewChild('desc') desc: ElementRef;
  @ViewChild('updated') updated: SwalComponent;

  video: SafeResourceUrl;
  userName: string;
  userData: UserData;
  online: boolean;
  fail = false;
  failCount = 0;
  checkIntervalId: number;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    if (!SessionService.user) {
      return;
    }
    this.userName = SessionService.user.username;
    this.video = this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.api}/embed/${this.userName}`);
    this.httpClient.get<UserData>(`${environment.api}/api/data/${this.userName}?i=${SessionService.token}`)
      .subscribe(data => {
        this.userData = data;
      });
    this.checkIntervalId = window.setInterval(() => this.liveCheck(), 5000);
  }

  updateData() {
    const data: UserData = {
      i: SessionService.token,
      title: this.title.nativeElement.value,
      description: this.desc.nativeElement.value,
      auto_post: this.userData.auto_post,
      post_text: this.userData.post_text
    };

    this.httpClient.post(`${environment.api}/api/user/edit`, data)
      .subscribe(() => {
        this.updated.fire();
      });
  }

  liveCheck() {
    this.httpClient.get(`https://hls-${this.userData.server}.arkjp.net/${this.userName}/index.m3u8`, { responseType: 'text' })
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


  updatePublicStatus(id: string, status: boolean) {
    const data = {
      i: SessionService.token,
      id,
      public: status
    };
    this.httpClient.post(`${environment.api}/api/archives/edit`, data).subscribe();
  }

  ngOnDestroy() {
    if (this.checkIntervalId !== undefined) {
      clearInterval(this.checkIntervalId);
    }
  }

}
