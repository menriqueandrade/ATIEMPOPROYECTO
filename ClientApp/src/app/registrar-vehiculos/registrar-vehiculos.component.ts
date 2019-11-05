import { Component, OnInit } from '@angular/core';
import {Vehiculos} from '../models/vehiculos';
import {VehiculosService} from '../services/vehiculos.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-registrar-vehiculos',
  templateUrl: './registrar-vehiculos.component.html',
  styleUrls: ['./registrar-vehiculos.component.css']
})
export class RegistrarVehiculosComponent implements OnInit {

  constructor(private vehiculosService: VehiculosService) { }
  vehiculos: Vehiculos;
  ngOnInit() {
  this.vehiculos = new Vehiculos();

}
add() {
  this.vehiculosService.addVehiculos(this.vehiculos)
  .subscribe( vehiculos => {
  alert('Se agrego un nuevo vehiculo')
  });
  }
}
