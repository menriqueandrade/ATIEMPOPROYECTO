
import {Injectable, Inject} from '@angular/core';
import {Observable, of, observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Servicio} from '../models/servicio';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  addServicio(servicio: Servicio): Observable<Servicio> {
    return this.http.post<Servicio>(this.baseUrl + 'api/Servicios', servicio, httpOptions).pipe(
      tap((newServicio: Servicio) => this.log(`added NewServicio w/ id_servicio=${newServicio.id_servicio}`)),
      catchError(this.handleError<Servicio>('addServicio'))
    );
  }

  getAll(): Observable<Servicio[]> {

    return this.http.get<Servicio[]>(this.baseUrl + 'api/Servicio').pipe(
      tap(_ => this.log('Se Consulta la información')),
      catchError(this.handleError<Servicio[]>('getAll', []))
    );

  }

  get(id_servicio: number): Observable<Servicio> {
    const url = `${this.baseUrl + 'api/Servicios'}/${id_servicio}`;
    return this.http.get<Servicio>(url).pipe(
      tap(_ => this.log(`fetched servicio id_servicio=${id_servicio}`)),
      catchError(this.handleError<Servicio>(`getHero id-servicio=${id_servicio}`))
    );
  }

  update(servicio: Servicio): Observable<any> {
    const url =
      `${this.baseUrl + 'api/Servicio'}/${servicio.id_servicio}`;
    return this.http.put(url, servicio, httpOptions).pipe(
      tap(_ => this.log(`updated servicio id_servicio=${servicio.id_servicio}`)),
      catchError(this.handleError<any>('servicio'))
    );
  }

  delete(servicio: Servicio | number): Observable<Servicio> {
    const id_servicio = typeof servicio === 'number' ? servicio : servicio.id_servicio;
    const url =

      `${this.baseUrl + 'api/Servicio'}/${id_servicio}`;

    return this.http.delete<Servicio>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted servicio id_servicio=${servicio}`)),
      catchError(this.handleError<Servicio>('deleteServicio'))
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
    alert(`ServicioService: ${message}`);
  }
}
