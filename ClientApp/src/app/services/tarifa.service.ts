import {Injectable, Inject} from '@angular/core';
import {Observable, of, observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import{Tarifa} from '../models/tarifa'
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  addTarifa(tarifa: Tarifa): Observable<Tarifa> {
    return this.http.post<Tarifa>(this.baseUrl + 'api/Tarifas', tarifa, httpOptions).pipe(
      tap((newTarifa: Tarifa) => this.log(`added NewTarifa w/ id_tarifa=${newTarifa}`)),
      catchError(this.handleError<Tarifa>('addTarifa'))
    );
  }

  getAll(): Observable<Tarifa[]> {

    return this.http.get<Tarifa[]>(this.baseUrl + 'api/Tarifa').pipe(
      tap(_ => this.log('Se Consulta la información')),
      catchError(this.handleError<Tarifa[]>('getAll', []))
    );

  }

   get(id_tarifa: number): Observable<Tarifa> {
    const url = `${this.baseUrl + 'api/Tarifas'}/${id_tarifa}`;
    return this.http.get<Tarifa>(url).pipe(
      tap(_ => this.log(`fetched tarifa id_tarifa=${id_tarifa}`)),
      catchError(this.handleError<Tarifa>(`getHero id_tarifa=${id_tarifa}`))
    );
  }

  update(tarifa: Tarifa): Observable<any> {
    const url =
      `${this.baseUrl + 'api/Tarifa'}/${tarifa.id_tarifa}`;
    return this.http.put(url, tarifa, httpOptions).pipe(
      tap(_ => this.log(`updated tarifa id_tarifa=${tarifa.id_tarifa}`)),
      catchError(this.handleError<any>('tarifa'))
    );
  }

  delete(tarifa: Tarifa | number): Observable<Tarifa> {
    const id_tarifa = typeof tarifa === 'number' ? tarifa : tarifa.id_tarifa;
    const url =

      `${this.baseUrl + 'api/Tarifa'}/${id_tarifa}`;

    return this.http.delete<Tarifa>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted tarifa id_tarifa=${id_tarifa}`)),
      catchError(this.handleError<Tarifa>('deleteTarifa'))
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
    alert(`TarifaService: ${message}`);
  }
  
}
