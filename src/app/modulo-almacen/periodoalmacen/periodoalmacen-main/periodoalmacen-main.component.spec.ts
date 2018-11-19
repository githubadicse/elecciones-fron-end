import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoalmacenMainComponent } from './periodoalmacen-main.component';

describe('PeriodoalmacenMainComponent', () => {
  let component: PeriodoalmacenMainComponent;
  let fixture: ComponentFixture<PeriodoalmacenMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoalmacenMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoalmacenMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
