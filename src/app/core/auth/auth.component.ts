import { Component, OnInit } from '@angular/core';
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
    private httpClient: HttpClient
  ) {
  }

  ngOnInit() {
    this.httpClient.get(`${environment.api}/api/auth/data`, { withCredentials: true })
      .subscribe((data: any) => {
        localStorage.setItem('token', data.i);
        this.sessionService.refresh();
        const redirect = localStorage.getItem('redirect');
        localStorage.removeItem('redirect');
        location.href = redirect;
      });
  }
}
