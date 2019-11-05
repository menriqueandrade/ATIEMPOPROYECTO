import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

import { InMemoryDataService } from './services/in-memory-data.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { RegistrarMensajeroComponent } from './registrar-mensajero/registrar-mensajero.component';
import { RegistrarTarifaComponent } from './registrar-tarifa/registrar-tarifa.component';
import { RegistrarUtilidadComponent } from './registrar-utilidad/registrar-utilidad.component';
import { RegistrarVehiculosComponent } from './registrar-vehiculos/registrar-vehiculos.component';
import { RegistrarServicioComponent } from './registrar-servicio/registrar-servicio.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TaskAddComponent,
    TaskListComponent,
    TaskEditComponent,
    RegistrarClienteComponent,
    RegistrarMensajeroComponent,
    RegistrarTarifaComponent,
    RegistrarUtilidadComponent,
    RegistrarVehiculosComponent,
    RegistrarServicioComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'registrar-cliente', component: RegistrarClienteComponent },
      { path: 'registrar-mensajero', component: RegistrarMensajeroComponent },
      { path: 'registrar-servicio', component: RegistrarServicioComponent },
      { path: 'registrar-tarifa', component: RegistrarTarifaComponent },
      { path: 'registrar-utilidad', component: RegistrarUtilidadComponent },
      { path: 'registrar-vehiculos', component: RegistrarVehiculosComponent },

    ]),
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
      ),*/
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }