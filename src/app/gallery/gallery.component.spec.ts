import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { HttpClientModule } from '@angular/common/http';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryComponent],
      imports: [HttpClientModule],
    }).compileComponents();
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    component.portraits = [
      {
        fileName: 'Moonlight 1.png',
        name: 'Becca Lyria',
        artist: 'Moonlight',
        url: 'https://www.instagram.com/moonlightkcreations/',
        alt: 'Banner art of Becca.',
        description: 'She uses this portrait to advertise her services.',
      },
      {
        fileName: 'Moonlight 3.png',
        name: 'A Forest Adventure',
        artist: 'Moonlight',
        url: 'https://www.instagram.com/moonlightkcreations/',
        alt: 'Becca with one eye closed, pushing through some trees in a forest, wearing a purple corset and pants.',
        description:
          'Becca loves exploring. You never know when you might find an ancient ruin.',
      },
    ];
    component.emotes = [
      {
        fileName: 'BeccaAngry.png',
        name: 'Angry',
        alt: 'Becca with a fist raised, her face red from anger',
        description: 'It does not take much to outrage Becca.',
      },
      {
        fileName: 'BeccaArt.png',
        name: 'Art',
        alt: 'Becca with a beret on her head, paintbrushes and paint pallet in hand',
        description: 'She does have an artistic side.',
      },
    ];
    component.poses = [
      {
        fileName: 'cheer.png',
        name: 'Cheerleader',
        alt: 'Becca wearing a purple croptop, purple shorts, and purple footless stockings. Holding a pompom in each hand.',
        description: 'She does her best to cheer Rosalia on.',
      },
      {
        fileName: 'magic.png',
        name: 'Magic Circle',
        alt: 'Becca sitting on her bed, admiring the magic circle she drew on the floor.',
        description:
          'Even when she is supposed to be resting, Becca cannot resist the call of magic.',
      },
    ];
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the intro view', () => {
    expect(component.view).toBe('intro');
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Gallery');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(4);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Portrait Exhibit');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent?.trim()).toBe('Emotion Exhibit');
    expect(buttons[2].tagName).toBe('BUTTON');
    expect(buttons[2].textContent?.trim()).toBe('Mural Exhibit');
    expect(buttons[3].tagName).toBe('A');
    expect(buttons[3].textContent?.trim()).toBe('Enough art for now');
    expect(buttons[3].getAttribute('routerLink')).toBe('/becca');
  });

  it('should render the portrait view', () => {
    component.changeView('portrait');
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe('portrait');
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Portraits');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(5);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Previous Portrait');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent?.trim()).toBe('Next Portrait');
    expect(buttons[2].tagName).toBe('BUTTON');
    expect(buttons[2].textContent?.trim()).toBe('Emotion Exhibit');
    expect(buttons[3].tagName).toBe('BUTTON');
    expect(buttons[3].textContent?.trim()).toBe('Mural Exhibit');
    expect(buttons[4].tagName).toBe('A');
    expect(buttons[4].textContent?.trim()).toBe('Enough art for now');
    expect(buttons[4].getAttribute('routerLink')).toBe('/becca');
  });

  it(`should render the art correctly`, () => {
    for (const portrait of component.portraits) {
      component.changeView('portrait');
      component.selectPortrait(String(component.portraits.indexOf(portrait)));
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      expect(component.view).toBe('portrait');
      const portraitBox = compiled.querySelector('.image');
      const links = portraitBox?.querySelectorAll('a');
      const imageLink = links?.[0];
      expect(imageLink?.getAttribute('href')).toBe(
        `https://cdn.naomi.lgbt/becca/art/${portrait.fileName}`
      );
      expect(imageLink?.getAttribute('target')).toBe('_blank');
      const artistLink = links?.[1];
      expect(artistLink?.getAttribute('href')).toBe(portrait.url);
      expect(artistLink?.getAttribute('target')).toBe('_blank');
      const img = portraitBox?.querySelector('img');
      expect(img?.getAttribute('src')).toBe(
        `https://cdn.naomi.lgbt/becca/art/${portrait.fileName}`
      );
      expect(img?.getAttribute('alt')).toBe(portrait.alt);
      const title = portraitBox?.querySelector('h2');
      expect(title?.textContent?.trim()).toBe(portrait.name);
      const ps = portraitBox?.querySelectorAll('p');
      expect(ps?.length).toBe(2);
      expect(ps?.[0].textContent?.trim()).toBe(portrait.description);
      expect(ps?.[1].textContent?.trim()).toBe(`-- By ${portrait.artist}`);
    }
  });

  it('should render the emote view', () => {
    component.changeView('emote');
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe('emote');
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Emotes');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(5);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Previous Emote');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent?.trim()).toBe('Next Emote');
    expect(buttons[2].tagName).toBe('BUTTON');
    expect(buttons[2].textContent?.trim()).toBe('Portrait Exhibit');
    expect(buttons[3].tagName).toBe('BUTTON');
    expect(buttons[3].textContent?.trim()).toBe('Mural Exhibit');
    expect(buttons[4].tagName).toBe('A');
    expect(buttons[4].textContent?.trim()).toBe('Enough art for now');
    expect(buttons[4].getAttribute('routerLink')).toBe('/becca');
  });

  it(`should render the emotes correctly`, () => {
    for (const emote of component.emotes) {
      component.changeView('emote');
      component.selectEmote(String(component.emotes.indexOf(emote)));
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      expect(component.view).toBe('emote');
      const emoteBox = compiled.querySelector('.image');
      const imageLink = emoteBox?.querySelector('a');
      expect(imageLink?.getAttribute('href')).toBe(
        `https://cdn.naomi.lgbt/becca/emotes/${emote.fileName}`
      );
      expect(imageLink?.getAttribute('target')).toBe('_blank');
      const img = emoteBox?.querySelector('img');
      expect(img?.getAttribute('src')).toBe(
        `https://cdn.naomi.lgbt/becca/emotes/${emote.fileName}`
      );
      expect(img?.getAttribute('alt')).toBe(emote.alt);
      const title = emoteBox?.querySelector('h2');
      expect(title?.textContent?.trim()).toBe(emote.name);
      const description = emoteBox?.querySelector('p');
      expect(description?.textContent?.trim()).toBe(emote.description);
    }
  });

  it('should render the murals view', () => {
    component.changeView('pose');
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    expect(component.view).toBe('pose');
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Poses');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(5);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Previous Mural');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent?.trim()).toBe('Next Mural');
    expect(buttons[2].tagName).toBe('BUTTON');
    expect(buttons[2].textContent?.trim()).toBe('Portrait Exhibit');
    expect(buttons[3].tagName).toBe('BUTTON');
    expect(buttons[3].textContent?.trim()).toBe('Emotion Exhibit');
    expect(buttons[4].tagName).toBe('A');
    expect(buttons[4].textContent?.trim()).toBe('Enough art for now');
    expect(buttons[4].getAttribute('routerLink')).toBe('/becca');
  });

  it(`should render the poses correctly`, () => {
    for (const pose of component.poses) {
      component.changeView('pose');
      component.selectPose(String(component.poses.indexOf(pose)));
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      expect(component.view).toBe('pose');
      const emoteBox = compiled.querySelector('.image');
      const imageLink = emoteBox?.querySelector('a');
      expect(imageLink?.getAttribute('href')).toBe(
        `https://cdn.naomi.lgbt/becca/koikatsu/${pose.fileName}`
      );
      expect(imageLink?.getAttribute('target')).toBe('_blank');
      const img = emoteBox?.querySelector('img');
      expect(img?.getAttribute('src')).toBe(
        `https://cdn.naomi.lgbt/becca/koikatsu/${pose.fileName}`
      );
      expect(img?.getAttribute('alt')).toBe(pose.alt);
      const title = emoteBox?.querySelector('h2');
      expect(title?.textContent?.trim()).toBe(pose.name);
      const description = emoteBox?.querySelector('p');
      expect(description?.textContent?.trim()).toBe(pose.description);
    }
  });
});
