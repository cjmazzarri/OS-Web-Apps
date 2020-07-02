import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSectionStatisticComponent } from './show-section-statistic.component';

describe('ShowSectionStatisticComponent', () => {
  let component: ShowSectionStatisticComponent;
  let fixture: ComponentFixture<ShowSectionStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSectionStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSectionStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
