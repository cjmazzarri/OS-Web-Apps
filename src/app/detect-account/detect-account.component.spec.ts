import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectAccountComponent } from './detect-account.component';

describe('DetectAccountComponent', () => {
  let component: DetectAccountComponent;
  let fixture: ComponentFixture<DetectAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
