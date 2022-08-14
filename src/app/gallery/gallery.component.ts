import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { ArtInt, artList } from 'src/assets/data/artList';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  artList: ArtInt[] = [];
  private _albums: Array<any> = [];

  constructor(private _lightbox: Lightbox) {
    for (let i = 0; i < artList.length; i++) {
      const base = "../../assets/art/";
      const src = base + artList[i].fileName;
      const caption = artList[i].artName;

      const album = {
        src: src,
      };
      this._albums.push(album);
    };

  }

  open(index: number): void {
    console.log(this._lightbox);
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    this._lightbox.close();
  }

  ngOnInit(): void {
    this.artList = artList;
  }
}
