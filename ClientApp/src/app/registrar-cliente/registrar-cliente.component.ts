import { Component, OnInit } from '@angular/core';
import {Cliente} from '../models/cliente'
import {ClienteService} from '../services/cliente.service'

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {
  constructor(private clienteService: ClienteService) { }
  cliente: Cliente;
  ngOnInit() {
  this.cliente = new Cliente();

}
add() {
  this.clienteService.addCliente(this.cliente)
  .subscribe(cliente => {
  alert('Se agrego un nuevo cliente')
  });
  }
}
