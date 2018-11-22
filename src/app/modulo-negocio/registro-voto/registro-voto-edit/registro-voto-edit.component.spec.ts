import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVotoEditComponent } from './registro-voto-edit.component';

describe('RegistroVotoEditComponent', () => {
  let component: RegistroVotoEditComponent;
  let fixture: ComponentFixture<RegistroVotoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroVotoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVotoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
