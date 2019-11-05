import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { RegistrarClienteComponent} from './registrar-cliente/registrar-cliente.component';
import {RegistrarMensajeroComponent} from './registrar-mensajero/registrar-mensajero.component'
import{RegistrarTarifaComponent}from './registrar-tarifa/registrar-tarifa.component'
import{RegistrarUtilidadComponent}from './registrar-utilidad/registrar-utilidad.component'
import{RegistrarVehiculosComponent}from './registrar-vehiculos/registrar-vehiculos.component'
import{RegistrarServicioComponent}from './registrar-servicio/registrar-servicio.component'

const routes: Routes = [
  {path:'tasklist',component:TaskListComponent},
  {path:'taskadd',component:TaskAddComponent},
  {path:'taskedit/:id',component:TaskEditComponent},
  {path:'registrar-cliente',component:RegistrarClienteComponent},
  {path:'registrar-mensajero',component:RegistrarMensajeroComponent},
  {path:'registrar-servicio',component:RegistrarServicioComponent},
  {path:'registrar-tarifa',component:RegistrarTarifaComponent},
  {path:'registrar-utilidad',component:RegistrarUtilidadComponent},
  {path:'registrar-vehiculos',component:RegistrarVehiculosComponent}
  
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }