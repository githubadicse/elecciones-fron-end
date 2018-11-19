import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexMainComponent } from './kardex-main.component';

describe('KardexMainComponent', () => {
  let component: KardexMainComponent;
  let fixture: ComponentFixture<KardexMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KardexMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
