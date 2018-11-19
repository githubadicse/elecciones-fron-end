import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenSalidaMainComponent } from './almacen-salida-main.component';

describe('AlmacenSalidaMainComponent', () => {
  let component: AlmacenSalidaMainComponent;
  let fixture: ComponentFixture<AlmacenSalidaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenSalidaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenSalidaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
