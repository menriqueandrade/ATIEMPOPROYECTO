import { Component, OnInit } from '@angular/core';
import {Servicio} from "../models/servicio";
import {ServicioService} from '../services/servicio.service';


@Component({
  selector: 'app-registrar-servicio',
  templateUrl: './registrar-servicio.component.html',
  styleUrls: ['./registrar-servicio.component.css']
})
export class RegistrarServicioComponent implements OnInit {

  constructor(private servicioservice: ServicioService) { }
  servicio: Servicio;
  ngOnInit() {
  this.servicio = new Servicio();

}
add() {
  this.servicioservice.addServicio(this.servicio)
  .subscribe(mensajero => {
  alert('Se agrego un nuevo servicio')
  });
  }

}
