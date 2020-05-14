import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-info-card',
  templateUrl: './archive-info-card.component.html',
  styleUrls: ['./archive-info-card.component.scss']
})
export class ArchiveInfoCardComponent implements OnInit {
  @Input() user: string;
  @Input() id: string;
  @Input() title: string;
  @Input() duration: string;
  @Input() username: string;
  @Input() thumbnail: string;
  @Input() timestamp: string;

  constructor() {
  }

  ngOnInit() {
  }

  getUnixTime(timestamp: string) {
    return new Date(timestamp).getTime();
  }

}
