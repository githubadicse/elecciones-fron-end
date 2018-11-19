import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAperturaComponent } from './registrar-apertura.component';

describe('RegistrarAperturaComponent', () => {
  let component: RegistrarAperturaComponent;
  let fixture: ComponentFixture<RegistrarAperturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAperturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAperturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
