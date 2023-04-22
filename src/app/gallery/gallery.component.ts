import { Component, OnInit } from '@angular/core';
import { ArtInt, artList } from 'src/assets/data/artList';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  artList: ArtInt[] = [];

  selectedArt?: ArtInt;


  constructor() { }

  ngOnInit(): void {
    this.artList = artList;
  }

  viewCloser(art: ArtInt) {
    this.selectedArt = art;
  }

  closeModal() {
    this.selectedArt = undefined;
  }
}

