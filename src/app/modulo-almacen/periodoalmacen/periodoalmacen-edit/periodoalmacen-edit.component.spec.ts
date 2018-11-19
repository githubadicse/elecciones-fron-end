import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoalmacenEditComponent } from './periodoalmacen-edit.component';

describe('PeriodoalmacenEditComponent', () => {
  let component: PeriodoalmacenEditComponent;
  let fixture: ComponentFixture<PeriodoalmacenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoalmacenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoalmacenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
