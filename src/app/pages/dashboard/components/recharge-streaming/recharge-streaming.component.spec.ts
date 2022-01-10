import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeStreamingComponent } from './recharge-streaming.component';

describe('RechargeStreamingComponent', () => {
  let component: RechargeStreamingComponent;
  let fixture: ComponentFixture<RechargeStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeStreamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
