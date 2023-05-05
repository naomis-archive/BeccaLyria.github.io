import { ComponentFixture, TestBed } from '@angular/core/testing';
import { portraits } from 'src/data/portraits';

import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the art data correctly', () => {
    expect(component.portraits).toEqual(portraits);
  });

  it('should render the opening texts correctly', () => {
    const title = compiled.querySelector('h1');
    const intro = compiled.querySelector('p');
    expect(title.innerText.trim()).toBe('My Art!');
    expect(intro.innerText.trim()).toBe(
      'These art works were commissioned from an artist specifically for me.'
    );
  });

  it('should render the art data correctly', () => {
    const artTiles = compiled.querySelectorAll('.grid-box');
    portraits.forEach((art, i) => {
      const artLink = artTiles[i].querySelector('img').getAttribute('src');
      const artName = artTiles[i].querySelector('.art-name').innerText.trim();
      const artistLink = artTiles[i]
        .querySelector('.artist-link')
        .getAttribute('href');
      const artistName = artTiles[i]
        .querySelector('.artist-link')
        .innerText.trim();
      expect(artLink).toContain(art.fileName);
      expect(artName).toBe(art.artName);
      expect(artistLink).toBe(art.artistUrl);
      expect(artistName).toBe(art.artist);
    });
  });
});
