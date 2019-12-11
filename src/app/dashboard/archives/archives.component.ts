import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { SessionService } from '../../core/service/session.service';
import { faUnlock } from '@fortawesome/free-solid-svg-icons/faUnlock';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

interface Archives {
  id: string;
  title: string;
  timestamp: string;
  thumbnail: string;
  duration: number;
  lock: 0;
}

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {
  @ViewChild('LockError', {static: false}) lockError: SwalComponent;

  archives: Archives[] = [];
  faUnlock = faUnlock;
  faLock = faLock;

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.httpClient.get<Archives[]>(`${environment.api}/api/archives/list/${SessionService.user.username}?i=${SessionService.token}`)
      .subscribe(data => {
        this.archives = data;
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

  updateLockStatus(id: string, status: boolean) {
    const data = {
      i: SessionService.token,
      id,
      lock: status
    };
    this.httpClient.post(`${environment.api}/api/archives/lock`, data).subscribe(
      () => {
        this.ngOnInit();
      },
      () => {
        this.lockError.fire();
      }
    );
  }
}
