import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptosComponent } from './inscriptos.component';

describe('InscriptosComponent', () => {
  let component: InscriptosComponent;
  let fixture: ComponentFixture<InscriptosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
