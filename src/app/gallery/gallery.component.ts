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

  ngOnInit(): void {
    this.artList = artList;
  }

  /**
   * Sets the artwork to be seen in the full screen view
   * @param art The art intended for full-screen view
   */
  viewCloser(art: ArtInt) {
    this.selectedArt = art;
  }

  /**
   * Closes the full screen view of the image.
   */
  closeModal() {
    this.selectedArt = undefined;
  }
}

