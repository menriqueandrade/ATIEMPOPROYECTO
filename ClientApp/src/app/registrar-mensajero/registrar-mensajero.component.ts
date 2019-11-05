import { Component, OnInit } from '@angular/core';
import {Mensajero} from "../models/mensajero";
import { MensajeroService } from '../services/mensajero.service';



@Component({
  selector: 'app-registrar-mensajero',
  templateUrl: './registrar-mensajero.component.html',
  styleUrls: ['./registrar-mensajero.component.css']
})
export class RegistrarMensajeroComponent implements OnInit {
  constructor(private mensajeroservice: MensajeroService) { }
  mensajero: Mensajero;
  ngOnInit() {
  this.mensajero = new Mensajero();

}
add() {
  this.mensajeroservice.addMensajero(this.mensajero)
  .subscribe(mensajero => {
  alert('Se agrego un nuevo mensajero')
  });
  }

}
