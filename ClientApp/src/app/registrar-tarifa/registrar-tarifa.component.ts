import { Component, OnInit } from '@angular/core';
import{Tarifa} from '../models/tarifa';
import {TarifaService} from '../services/tarifa.service'
@Component({
  selector: 'app-registrar-tarifa',
  templateUrl: './registrar-tarifa.component.html',
  styleUrls: ['./registrar-tarifa.component.css']
})
export class RegistrarTarifaComponent implements OnInit {

  constructor(private tarifaService: TarifaService) { }
  tarifa: Tarifa;
  ngOnInit() {
  this.tarifa = new Tarifa();

}
add() {
  this.tarifaService.addTarifa(this.tarifa)
  .subscribe( tarifa => {
  alert('Se agrego un nuevo tarifa')
  });
  }
}
