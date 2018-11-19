import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoMarcaMainComponent } from './catalogo-marca-main.component';

describe('CatalogoMarcaMainComponent', () => {
  let component: CatalogoMarcaMainComponent;
  let fixture: ComponentFixture<CatalogoMarcaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoMarcaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoMarcaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
