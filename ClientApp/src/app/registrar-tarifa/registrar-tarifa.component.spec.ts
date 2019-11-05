import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTarifaComponent } from './registrar-tarifa.component';

describe('RegistrarTarifaComponent', () => {
  let component: RegistrarTarifaComponent;
  let fixture: ComponentFixture<RegistrarTarifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarTarifaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
