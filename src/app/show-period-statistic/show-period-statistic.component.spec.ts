import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPeriodStatisticComponent } from './show-period-statistic.component';

describe('ShowPeriodStatisticComponent', () => {
  let component: ShowPeriodStatisticComponent;
  let fixture: ComponentFixture<ShowPeriodStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPeriodStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPeriodStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
