import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpoCoderComponent } from './expo-coder.component';

describe('ExpoCoderComponent', () => {
  let component: ExpoCoderComponent;
  let fixture: ComponentFixture<ExpoCoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpoCoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpoCoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
