import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

const links = [
  { text: 'Becca Lyria', url: '/' },
  { text: 'Add to Server', url: 'https://invite.beccalyria.com' },
  { text: 'Documentation', url: 'https://docs.beccalyria.com' },
  { text: 'Dashboard', url: 'https://dash.beccalyria.com' },
  { text: "Who's Becca?", url: '/becca' },
];

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the expected navigation links', () => {
    const linkElements = Array.from(compiled.querySelectorAll('a')).slice(
      0,
      links.length
    );
    linkElements.forEach((el: any, i) => {
      expect(el.getAttribute('routerLink') || el.getAttribute('href')).toBe(
        links[i].url
      );
      expect(el.innerText.trim()).toBe(links[i].text);
    });
  });
});
