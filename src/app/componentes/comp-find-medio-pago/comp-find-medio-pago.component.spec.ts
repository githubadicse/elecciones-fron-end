import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFindMedioPagoComponent } from './comp-find-medio-pago.component';

describe('CompFindMedioPagoComponent', () => {
  let component: CompFindMedioPagoComponent;
  let fixture: ComponentFixture<CompFindMedioPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFindMedioPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFindMedioPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
