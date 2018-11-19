import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenSalidaEdicionComponent } from './almacen-salida-edicion.component';

describe('AlmacenSalidaEdicionComponent', () => {
  let component: AlmacenSalidaEdicionComponent;
  let fixture: ComponentFixture<AlmacenSalidaEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenSalidaEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenSalidaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
