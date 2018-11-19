import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioOperacionesComponent } from './inicio-operaciones.component';

describe('InicioOperacionesComponent', () => {
  let component: InicioOperacionesComponent;
  let fixture: ComponentFixture<InicioOperacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioOperacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
