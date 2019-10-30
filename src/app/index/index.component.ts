import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

interface LiveInfo {
  username: string;
  created: string;
  title: string;
}

interface ArchiveInfo {
  id: string;
  title: string;
  timestamp: string;
  thumbnail: string;
  duration: number;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  liveInfo: LiveInfo[] = [];
  archiveInfo: ArchiveInfo[] = [];
  apiUrl = environment.api;
  cacheVersion: number;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    this.cacheVersion = Math.floor((new Date().getTime() - 15000) / 60000);
    this.httpClient.get<LiveInfo[]>(`${this.apiUrl}/api/streams/list`)
      .subscribe(data => {
        this.liveInfo = data;
      });

    this.httpClient.get<ArchiveInfo[]>(`${this.apiUrl}/api/archives/index`)
      .subscribe(data => {
        this.archiveInfo = data;
      })
  }
}
