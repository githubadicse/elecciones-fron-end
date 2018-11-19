import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenIngresoListaComponent } from './almacen-ingreso-lista.component';

describe('AlmacenIngresoListaComponent', () => {
  let component: AlmacenIngresoListaComponent;
  let fixture: ComponentFixture<AlmacenIngresoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenIngresoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenIngresoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
