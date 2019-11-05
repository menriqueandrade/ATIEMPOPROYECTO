import { Component, OnInit } from '@angular/core';
import {TaskService} from '../services/task.service'
import { Task } from '../models/task';
import {Cliente}from '../models/cliente';
import {ClienteService} from '../services/cliente.service'

@Component({
selector: 'app-task-list',
templateUrl: './task-list.component.html',
styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

clientes:Cliente[];






constructor(private clienteservice:ClienteService)
{ }
ngOnInit() {
this.getAll();
}
getAll(){
this.clienteservice.getAll().subscribe(clientes=>this.clientes=clientes);
}
}
