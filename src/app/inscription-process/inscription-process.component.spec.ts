import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionProcessComponent } from './inscription-process.component';

describe('InscriptionProcessComponent', () => {
  let component: InscriptionProcessComponent;
  let fixture: ComponentFixture<InscriptionProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionProcessComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
