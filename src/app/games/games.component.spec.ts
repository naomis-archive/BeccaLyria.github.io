import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games.component';
import { HttpClientModule } from '@angular/common/http';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamesComponent],
      imports: [HttpClientModule],
    }).compileComponents();
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    component.games = [
      {
        fileName: 'cladun.png',
        game: 'Cladun X2',
        alt: 'A pixel art version of Becca, holding a purple staff with blue lighting coming from the tip.',
        description:
          "Not Becca's favourite adventure, but it was still lucrative!",
      },
      {
        fileName: 'code-vein.png',
        game: 'CODE VEIN',
        alt: 'Becca wearing a purple tshirt, purple miniskirt, and purple boots.',
        description: 'This was a tough world to navigate, but she managed.',
      },
    ];
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the expected properties', () => {
    expect(component.games).toBeDefined();
  });

  it('should render the games view', () => {
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    const title = compiled.querySelector('h1');
    expect(title?.textContent?.trim()).toBe('Adventures');
    const buttons = compiled.querySelectorAll('.nes-btn');
    expect(buttons.length).toBe(3);
    expect(buttons[0].tagName).toBe('BUTTON');
    expect(buttons[0].textContent?.trim()).toBe('Previous Adventure');
    expect(buttons[1].tagName).toBe('BUTTON');
    expect(buttons[1].textContent?.trim()).toBe('Next Adventure');
    expect(buttons[2].tagName).toBe('A');
    expect(buttons[2].textContent?.trim()).toBe("That's enough for today");
    expect(buttons[2].getAttribute('routerLink')).toBe('/becca');
  });

  it(`should render the adventures correctly`, () => {
    for (const adventure of component.games) {
      component.selectGame(String(component.games.indexOf(adventure)));
      fixture.detectChanges();
      compiled = fixture.nativeElement;
      const game = compiled.querySelector('.game');
      const imgLink = game?.querySelector('a');
      expect(imgLink?.getAttribute('href')).toBe(
        `https://cdn.naomi.lgbt/becca/games/${adventure.fileName}`
      );
      expect(imgLink?.getAttribute('target')).toBe('_blank');
      const img = game?.querySelector('img');
      expect(img?.getAttribute('src')).toBe(
        `https://cdn.naomi.lgbt/becca/games/${adventure.fileName}`
      );
      expect(img?.getAttribute('alt')).toBe(adventure.alt);
      const title = game?.querySelector('h2');
      expect(title?.textContent?.trim()).toBe(adventure.game);
      const description = game?.querySelector('p');
      expect(description?.textContent?.trim()).toBe(adventure.description);
    }
  });
});
