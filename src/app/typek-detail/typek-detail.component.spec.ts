import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypekDetailComponent } from './typek-detail.component';

describe('TypekDetailComponent', () => {
  let component: TypekDetailComponent;
  let fixture: ComponentFixture<TypekDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypekDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypekDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
