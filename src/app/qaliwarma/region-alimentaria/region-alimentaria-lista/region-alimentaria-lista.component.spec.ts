import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionAlimentariaListaComponent } from './region-alimentaria-lista.component';

describe('RegionAlimentariaListaComponent', () => {
  let component: RegionAlimentariaListaComponent;
  let fixture: ComponentFixture<RegionAlimentariaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionAlimentariaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionAlimentariaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
