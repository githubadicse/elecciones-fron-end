import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoLlegadaEditComponent } from './punto-llegada-edit.component';

describe('PuntoLlegadaEditComponent', () => {
  let component: PuntoLlegadaEditComponent;
  let fixture: ComponentFixture<PuntoLlegadaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoLlegadaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoLlegadaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
