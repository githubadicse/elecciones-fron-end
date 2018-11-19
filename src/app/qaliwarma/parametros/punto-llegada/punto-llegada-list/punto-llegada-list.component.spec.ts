import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoLlegadaListComponent } from './punto-llegada-list.component';

describe('PuntoLlegadaListComponent', () => {
  let component: PuntoLlegadaListComponent;
  let fixture: ComponentFixture<PuntoLlegadaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoLlegadaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoLlegadaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
