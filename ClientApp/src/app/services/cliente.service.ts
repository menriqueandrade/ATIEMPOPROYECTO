import {Injectable, Inject} from '@angular/core';
import {Observable, of, observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Cliente} from '../models/cliente';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl + 'api/clientes', cliente, httpOptions).pipe(
      tap((newCliente: Cliente) => this.log(`added NewCliente w/ id_cliente=${newCliente.Id}`)),
      catchError(this.handleError<Cliente>('addCliente'))
    );
  }

  getAll(): Observable<Cliente[]> {

    return this.http.get<Cliente[]>(this.baseUrl + 'api/Cliente').pipe(
      tap(_ => this.log('Se Consulta la información')),
      catchError(this.handleError<Cliente[]>('getAll', []))
    );

  }

  get(id_cliente: number): Observable<Cliente> {
    const url = `${this.baseUrl + 'api/Cliente'}/${id_cliente}`;
    return this.http.get<Cliente>(url).pipe(
      tap(_ => this.log(`fetched cliente id_cliente=${id_cliente}`)),
      catchError(this.handleError<Cliente>(`getHero id_cliente=${id_cliente}`))
    );
  }

  update(cliente: Cliente): Observable<any> {
    const url =
      `${this.baseUrl + 'api/Cliente'}/${cliente.Id}`;
    return this.http.put(url, cliente, httpOptions).pipe(
      tap(_ => this.log(`updated cliente id_cliente=${cliente.Id}`)),
      catchError(this.handleError<any>('cliente'))
    );
  }

  delete(cliente: Cliente | number): Observable<Cliente> {
    const id_cliente = typeof cliente === 'number' ? cliente : cliente.Id;
    const url =

      `${this.baseUrl + 'api/Cliente'}/${id_cliente}`;

    return this.http.delete<Cliente>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted cliente id_cliente=${id_cliente}`)),
      catchError(this.handleError<Cliente>('deleteCliente'))
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
    alert(`ClienteService: ${message}`);
  }
}
