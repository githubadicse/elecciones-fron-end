import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenSalidaListaComponent } from './almacen-salida-lista.component';

describe('AlmacenSalidaListaComponent', () => {
  let component: AlmacenSalidaListaComponent;
  let fixture: ComponentFixture<AlmacenSalidaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenSalidaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenSalidaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
