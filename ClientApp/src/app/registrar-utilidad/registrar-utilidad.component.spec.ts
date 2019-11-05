import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarUtilidadComponent } from './registrar-utilidad.component';

describe('RegistrarUtilidadComponent', () => {
  let component: RegistrarUtilidadComponent;
  let fixture: ComponentFixture<RegistrarUtilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarUtilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarUtilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
