import { Component, OnInit } from '@angular/core';
import { ArtInt, artList } from 'src/assets/data/artList';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})

  /**
   * The page that displays all of the accumulated BeccaLyria artwork.
   */
export class GalleryComponent implements OnInit {
  artList: ArtInt[] = [];

  selectedArt?: ArtInt;

  /**
   * Loads all the images to be displayed in the gallery when the page is loaded.
   */
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

