import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodoalmacenGridComponent } from './periodoalmacen-grid.component';

describe('PeriodoalmacenGridComponent', () => {
  let component: PeriodoalmacenGridComponent;
  let fixture: ComponentFixture<PeriodoalmacenGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodoalmacenGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodoalmacenGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
