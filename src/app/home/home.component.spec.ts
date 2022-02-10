import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

const texts = [
  'Becca Lyria is a community management and moderation bot for Discord.',
  'She offers many features, such as the ability to track moderation history for your users...',
  'Extensive and highly configurable logging...',
  'Multiple customisation options...',
  "And more! And all of Becca's features are 100% free!",
];

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the expected text', () => {
    const header = compiled.querySelector('h1');
    const ps = compiled.querySelectorAll('p');
    expect(header.innerText.trim()).toBe('Becca Lyria');
    for (let i = 0; i < texts.length; i++) {
      expect(ps[i].innerText.trim()).toBe(texts[i]);
    }
  });
});
