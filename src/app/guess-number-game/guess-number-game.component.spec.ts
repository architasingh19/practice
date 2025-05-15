import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessNumberGameComponent } from './guess-number-game.component';

describe('GuessNumberGameComponent', () => {
  let component: GuessNumberGameComponent;
  let fixture: ComponentFixture<GuessNumberGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessNumberGameComponent]
    });
    fixture = TestBed.createComponent(GuessNumberGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
