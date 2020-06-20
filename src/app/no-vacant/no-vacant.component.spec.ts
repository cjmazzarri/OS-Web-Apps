import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoVacantComponent } from './no-vacant.component';

describe('NoVacantComponent', () => {
  let component: NoVacantComponent;
  let fixture: ComponentFixture<NoVacantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoVacantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoVacantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
