import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypciComponent } from './typci.component';

describe('TypciComponent', () => {
  let component: TypciComponent;
  let fixture: ComponentFixture<TypciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
