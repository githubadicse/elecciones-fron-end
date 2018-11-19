import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionAlimentariaMainComponent } from './region-alimentaria-main.component';

describe('RegionAlimentariaMainComponent', () => {
  let component: RegionAlimentariaMainComponent;
  let fixture: ComponentFixture<RegionAlimentariaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionAlimentariaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionAlimentariaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
