import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Pagamento } from '../pagamento';
import {retry, catchError} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})

export class PagamentoAPIService {

  constructor(private httpClient: HttpClient) { }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
    } else {
    errorMessage = `Código de erro: ${error.status}\nMensagem: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
    }
    getPagamento(): Observable<Pagamento[]> {
      return this.httpClient.get<Pagamento[]>(this.apiURL)
      .pipe(retry(1),
      catchError(this.handleError))
      }
      createCliente(clie: Pagamento): Observable<Pagamento> {
        return this.httpClient.post<Pagamento>(`${this.apiURL}`, clie)
        .pipe(retry(1),
        catchError(this.handleError));
        }
  apiURL : string = "http://localhost:8080/api/clientes";
}
