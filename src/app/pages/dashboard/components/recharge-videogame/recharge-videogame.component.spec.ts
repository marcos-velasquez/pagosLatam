import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeVideogameComponent } from './recharge-videogame.component';

describe('RechargeVideogameComponent', () => {
  let component: RechargeVideogameComponent;
  let fixture: ComponentFixture<RechargeVideogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeVideogameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeVideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
