import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AperturaPeriodoComponent } from './apertura-periodo.component';

describe('AperturaPeriodoComponent', () => {
  let component: AperturaPeriodoComponent;
  let fixture: ComponentFixture<AperturaPeriodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AperturaPeriodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AperturaPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
