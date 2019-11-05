
import { Injectable,Inject } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Mensajero} from '../models/mensajero';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class MensajeroService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  addMensajero(mensajero: Mensajero): Observable<Mensajero> {
    return this.http.post<Mensajero>(this.baseUrl + 'api/Mensajeros', mensajero, httpOptions).pipe(
      tap((newMensajero: Mensajero) => this.log(`added NewMensajero w/ id_mensajero=${newMensajero.Id}`)),
      catchError(this.handleError<Mensajero>('addMensajero'))
    );
  }

  getAll(): Observable<Mensajero[]> {

    return this.http.get<Mensajero[]>(this.baseUrl + 'api/Mensajero').pipe(
      tap(_ => this.log('Se Consulta la información')),
      catchError(this.handleError<Mensajero[]>('getAll', []))
    );

  }

  get(id_mensajero: number): Observable<Mensajero> {
    const url = `${this.baseUrl + 'api/Mensajeros'}/${id_mensajero}`;
    return this.http.get<Mensajero>(url).pipe(
      tap(_ => this.log(`fetched mensajeros Id=${id_mensajero}`)),
        catchError(this.handleError<Mensajero>(`getHero id_mensajero=${id_mensajero}`))
    );
  }

  update(mensajero: Mensajero): Observable<any> {
    const url =
      `${this.baseUrl + 'api/Mensajero'}/${mensajero.Id}`;
    return this.http.put(url, mensajero, httpOptions).pipe(
      tap(_ => this.log(`updated mensajero id_mensajero=${mensajero.Id}`)),
      catchError(this.handleError<any>('mensajero'))
    );
  }

  delete(mensajero: Mensajero | number): Observable<Mensajero> {
    const id_mensajero = typeof mensajero === 'number' ? mensajero : mensajero.Id;
    const url =

      `${this.baseUrl + 'api/Mensajero'}/${id_mensajero}`;

    return this.http.delete<Mensajero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted mensajero id_mensajero=${id_mensajero}`)),
      catchError(this.handleError<Mensajero>('deleteMensajero'))
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
    alert(`MensajeroService: ${message}`);
  }
}
