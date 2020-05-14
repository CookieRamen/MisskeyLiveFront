import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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

  constructor(private cookieService: CookieService, private httpClient: HttpClient) {
    this.refresh();
  }

  refresh() {
    this.cookieService.delete('live-token');
    SessionService.login = this.cookieService.check('live_token');
    SessionService.token = SessionService.login ? this.cookieService.get('live_token') : null;
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
    this.cookieService.delete('live_token');
    this.refresh();
  }
}
