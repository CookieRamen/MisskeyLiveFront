import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface Ogp {
  title: string;
  desc: string;
  img: string;
  type: 'website' | 'article';
}

@Injectable({
  providedIn: 'root'
})
export class OgpService {

  constructor(
    private metaService: Meta,
    private titleService: Title
  ) {
  }

  setMetaTag(data: Ogp) {
    this.titleService.setTitle(data.title);
    this.metaService.updateTag({ name: 'description', content: data.desc });
    this.metaService.updateTag({ property: 'og:title', content: data.title });
    this.metaService.updateTag({ property: 'og:description', content: data.desc });
    this.metaService.updateTag({ property: 'og:type', content: data.type });
    this.metaService.updateTag({ property: 'og:url', content: ''});
    this.metaService.updateTag({ property: 'og:image', content: data.img });
    this.metaService.updateTag({ property: 'twitter:card', content: 'summary' });
  }
}
