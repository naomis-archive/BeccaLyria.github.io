import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeccaComponent } from './becca.component';

describe('BeccaComponent', () => {
  let component: BeccaComponent;
  let fixture: ComponentFixture<BeccaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeccaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeccaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
