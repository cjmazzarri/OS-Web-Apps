import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsNotFoundComponent } from './requests-not-found.component';

describe('RequestsNotFoundComponent', () => {
  let component: RequestsNotFoundComponent;
  let fixture: ComponentFixture<RequestsNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
