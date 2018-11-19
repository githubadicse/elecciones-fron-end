import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoLlegadaMainComponent } from './punto-llegada-main.component';

describe('PuntoLlegadaMainComponent', () => {
  let component: PuntoLlegadaMainComponent;
  let fixture: ComponentFixture<PuntoLlegadaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoLlegadaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoLlegadaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
