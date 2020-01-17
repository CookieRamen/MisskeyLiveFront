import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import {environment} from '../../../environments/environment';
import {SessionService} from '../../core/service/session.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-livenow',
  templateUrl: './livenow.component.html',
  styleUrls: ['./livenow.component.scss']
})
export class LivenowComponent implements OnInit {

  supportBrowser = true;
  server: string;
  streamKey: string;
  stream: MediaStream;
  mics: MediaStreamTrack[];
  recorder = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    if (!('getDisplayMedia' in navigator.mediaDevices) || !('MediaRecorder' in window)) {
      this.supportBrowser = false;
      return;
    }
    this.httpClient.get<any>(`${environment.api}/api/data/${SessionService.user.username}?i=${SessionService.token}`)
      .subscribe(data => {
        this.server = data.server;
        this.streamKey = data.live_token;
        this.setup();
      });
  }

  async setup() {
    // @ts-ignore
    this.stream = await navigator.mediaDevices.getDisplayMedia({video: true, audio: true});
    try {
      this.mics = (await navigator.mediaDevices.getUserMedia({audio: true})).getAudioTracks();
      this.mics.forEach(mic => {
        mic.enabled = false;
        this.stream.addTrack(mic);
      });
    } catch (e) {}
  }

  muteMic(mute: boolean) {
    this.mics.forEach(mic => this.mute(mic.id, mute));
  }

  muteDesktop(mute: boolean) {
    this.stream.getAudioTracks().filter(track => !this.mics.includes(track)).forEach(track => this.mute(track.id, mute));
  }

  mute(trackId: string, mute: boolean) {
    this.stream.getTrackById(trackId).enabled = !mute;
  }

  start() {
    const socket = io(`wss://livenow-${this.server}.arkjp.net`);
    socket.emit('start', {stream_key: `${SessionService.user.username}?token=${this.streamKey}`});
    // @ts-ignore
    this.recorder = new MediaRecorder(this.stream);
    this.recorder.ondataavailable = e => socket.emit('video', e.data);
    this.recorder.onstop = socket.close.bind(socket);
    socket.on('stop', stop.bind(this));
    this.recorder.start(0);
  }

  stop() {
    this.recorder.stop();
    this.recorder = null;
  }
}
