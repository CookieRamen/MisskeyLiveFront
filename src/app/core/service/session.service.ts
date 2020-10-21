import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MisskeyUser {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  static login = false;
  static token: string = null;
  static user: MisskeyUser = null;

  constructor(private httpClient: HttpClient) {
    this.refresh();
  }

  refresh() {
    SessionService.login = !!localStorage.getItem('token');
    SessionService.token = SessionService.login ? localStorage.getItem('token') : null;
    if (!SessionService.login) {
      SessionService.user = null;
      return;
    }
    if (SessionService.user !== null) {
      return;
    }
    const req = this.httpClient.post<MisskeyUser>('https://misskey.io/api/i', { i: SessionService.token });
    req.subscribe(
      user => SessionService.user = user,
      () => this.logout());
    return req;
  }

  logout() {
    localStorage.removeItem('token');
    this.refresh();
  }
}
