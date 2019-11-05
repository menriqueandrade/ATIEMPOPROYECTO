import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarVehiculosComponent } from './registrar-vehiculos.component';

describe('RegistrarVehiculosComponent', () => {
  let component: RegistrarVehiculosComponent;
  let fixture: ComponentFixture<RegistrarVehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarVehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
