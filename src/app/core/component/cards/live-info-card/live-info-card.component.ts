import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-info-card',
  templateUrl: './live-info-card.component.html',
  styleUrls: ['./live-info-card.component.scss']
})
export class LiveInfoCardComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;
  @Input() thumbnail: string;
  @Input() username: string;

  constructor() {
  }

  ngOnInit() {
  }
}
