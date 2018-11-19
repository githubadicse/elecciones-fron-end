import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFindProveedorClienteRucComponent } from './comp-find-proveedor-cliente-ruc.component';

describe('CompFindProveedorClienteRucComponent', () => {
  let component: CompFindProveedorClienteRucComponent;
  let fixture: ComponentFixture<CompFindProveedorClienteRucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFindProveedorClienteRucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFindProveedorClienteRucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
