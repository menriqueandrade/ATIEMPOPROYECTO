import { Component, OnInit } from '@angular/core';
import {Utilidad} from '../models/utilidad';
import {UtilidadService} from '../services/utilidad.service'
 
@Component({
  selector: 'app-registrar-utilidad',
  templateUrl: './registrar-utilidad.component.html',
  styleUrls: ['./registrar-utilidad.component.css']
})
export class RegistrarUtilidadComponent implements OnInit {

  constructor(private utilidadService: UtilidadService) { }
  utilidad: Utilidad;
  ngOnInit() {
  this.utilidad = new Utilidad();

}
add() {
  this.utilidadService.addUtilidad(this.utilidad)
  .subscribe( utilidad => {
  alert('Se agrego un nuevo utilidad')
  });
  }
}
