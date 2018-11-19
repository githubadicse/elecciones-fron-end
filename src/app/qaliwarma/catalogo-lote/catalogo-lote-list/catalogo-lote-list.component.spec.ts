import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoLoteListComponent } from './catalogo-lote-list.component';

describe('CatalogoLoteListComponent', () => {
  let component: CatalogoLoteListComponent;
  let fixture: ComponentFixture<CatalogoLoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoLoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoLoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
