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
  @Input() duration: number;
  @Input() username: string;
  @Input() thumbnail: string;
  @Input() timestamp: string;

  constructor() {
  }

  ngOnInit() {
    this.timestamp = this.timestamp ? this.timestamp : '0'
  }

  getUnixTime(timestamp: string) {
    return new Date(timestamp).getTime();
  }

}
