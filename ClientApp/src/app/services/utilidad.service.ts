import { Injectable,Inject } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Utilidad} from '../models/utilidad';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class UtilidadService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  addUtilidad(utilidad: Utilidad): Observable<Utilidad> {
    return this.http.post<Utilidad>(this.baseUrl + 'api/Utilidades', utilidad, httpOptions).pipe(
      tap((newUtilidades: Utilidad) => this.log(`added NewUtilidad w/ id_utilidad=${newUtilidades.codigo_utilidad}`)),
      catchError(this.handleError<Utilidad>('addUtilidad'))
    );
  }

  getAll(): Observable<Utilidad[]> {

    return this.http.get<Utilidad[]>(this.baseUrl + 'api/Utilidad').pipe(
      tap(_ => this.log('Se Consulta la información')),
      catchError(this.handleError<Utilidad[]>('getAll', []))
    );

  }

  get(codigo_utilidad: number): Observable<Utilidad> {
    const url = `${this.baseUrl + 'api/Utilidades'}/${codigo_utilidad}`;
    return this.http.get<Utilidad>(url).pipe(
      tap(_ => this.log(`fetched utilidad codigo_utilidad=${codigo_utilidad}`)),
      catchError(this.handleError<Utilidad>(`getHero codigo_utilidad=${codigo_utilidad}`))
    );
  }

  update(utilidad: Utilidad): Observable<any> {
    const url =
      `${this.baseUrl + 'api/Utilidad'}/${utilidad.codigo_utilidad}`;
    return this.http.put(url, utilidad, httpOptions).pipe(
      tap(_ => this.log(`updated utilidad codigo_utilidad=${utilidad.codigo_utilidad}`)),
      catchError(this.handleError<any>('utilidad'))
    );
  }

  delete(utilidad: Utilidad | number): Observable<Utilidad> {
    const codigo_utilidad = typeof utilidad === 'number' ? utilidad : utilidad.codigo_utilidad;
    const url =

      `${this.baseUrl + 'api/Utilidad'}/${codigo_utilidad}`;

    return this.http.delete<Utilidad>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted utilidad codigo_utilidad=${codigo_utilidad}`)),
      catchError(this.handleError<Utilidad>('deleteUtilidad'))
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
    alert(`UtilidadService: ${message}`);
  }
  
}
