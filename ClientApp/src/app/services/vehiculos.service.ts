import { Injectable,Inject } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Vehiculos} from '../models/vehiculos';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  addVehiculos(vehiculo: Vehiculos): Observable<Vehiculos> {
    return this.http.post<Vehiculos>(this.baseUrl + 'api/Vehiculos', vehiculo, httpOptions).pipe(
      tap((newVehiculo: Vehiculos) => this.log(`added NewVehiculos w/ id=${newVehiculo.id_vehiculo}`)),
      catchError(this.handleError<Vehiculos>('addVehiculo'))
    );
  }

  getAll(): Observable<Vehiculos[]> {

    return this.http.get<Vehiculos[]>(this.baseUrl + 'api/Vehiculo').pipe(
      tap(_ => this.log('Se Consulta la información')),
      catchError(this.handleError<Vehiculos[]>('getAll', []))
    );

  }

  get(id_vehiculo: number): Observable<Vehiculos> {
    const url = `${this.baseUrl + 'api/Vehiculos'}/${id_vehiculo}`;
    return this.http.get<Vehiculos>(url).pipe(
      tap(_ => this.log(`fetched vehiculos id_vehiculo=${id_vehiculo}`)),
      catchError(this.handleError<Vehiculos>(`getHero id_vehiculo=${id_vehiculo}`))
    );
  }

  update(vehiculo: Vehiculos): Observable<any> {
    const url =
      `${this.baseUrl + 'api/Vehiculo'}/${vehiculo.id_vehiculo}`;
    return this.http.put(url, vehiculo, httpOptions).pipe(
      tap(_ => this.log(`updated vehiculos id_vehiculos=${vehiculo.id_vehiculo}`)),
      catchError(this.handleError<any>('vehiculo'))
    );
  }

  delete(vehiculo: Vehiculos | number): Observable<Vehiculos> {
    const id_vehiculo = typeof vehiculo === 'number' ? vehiculo : vehiculo.id_vehiculo;
    const url =

      `${this.baseUrl + 'api/Vehiculo'}/${id_vehiculo}`;

    return this.http.delete<Vehiculos>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted vehiculos id_vehiculo=${id_vehiculo}`)),
      catchError(this.handleError<Vehiculos>('deleteVehiculo'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    alert(`VehiculoService: ${message}`);
  }
}
