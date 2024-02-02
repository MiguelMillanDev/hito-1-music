// tab3.page.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  topSongs: any[] = [
    { title: 'Skorpion', artist: 'Drake', cover: 'url1' },
    { title: 'Fair Trade', artist: 'Drake', cover: 'url2' },
    
  ];

  emergingArtists: any[] = [
    { name: 'Artist A', image: 'urlA' },
    { name: 'Artist B', image: 'urlB' },

  ];

  latestReleases: any[] = [
    { title: 'Release 1', artist: 'Artist X', cover: 'urlX' },
    { title: 'Release 2', artist: 'Artist Y', cover: 'urlY' },

  ];

  constructor() {}

}
