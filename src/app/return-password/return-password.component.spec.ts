import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPasswordComponent } from './return-password.component';

describe('ReturnPasswordComponent', () => {
  let component: ReturnPasswordComponent;
  let fixture: ComponentFixture<ReturnPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
