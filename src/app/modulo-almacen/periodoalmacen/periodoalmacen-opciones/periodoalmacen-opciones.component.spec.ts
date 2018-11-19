import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoalmacenOpcionesComponent } from './periodoalmacen-opciones.component';

describe('PeriodoalmacenOpcionesComponent', () => {
  let component: PeriodoalmacenOpcionesComponent;
  let fixture: ComponentFixture<PeriodoalmacenOpcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoalmacenOpcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoalmacenOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
