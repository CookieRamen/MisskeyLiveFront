import { Component } from '@angular/core';
import { SessionService } from './core/service/session.service';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  staticSessionService = SessionService;
  isCollapsed = true;
  showNavbar = true;

  constructor(
    private sessionService: SessionService,
    private cookieService: CookieService,
    private router: Router
  ) {
    router.events.subscribe(event => {
      if (!(event instanceof NavigationStart)) {
        return;
      }
      this.showNavbar = !event.url.startsWith('/live_chat/');
    });
  }

  login() {
    const now = location.href;
    this.cookieService.set('redirect', now, 1, '/');
    location.href = `${environment.api}/api/auth/login`;
  }
}
