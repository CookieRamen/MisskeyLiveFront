import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    private cookieService: CookieService,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    this.httpClient.get(`${environment.api}/api/auth/data`, { withCredentials: true })
      .subscribe((data: any) => {
        this.cookieService.set('live_token', data.i, 60, '/');
        this.sessionService.refresh();
        const redirect = this.cookieService.get('redirect');
        this.cookieService.delete('redirect');
        location.href = redirect;
      });
  }
}
