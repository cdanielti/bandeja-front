import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FiltroBandeja } from '../models/filtro-bandeja.model';
import { Comunicacion } from '../models/comunicacion.model';


@Injectable({
  providedIn: 'root'
})
export class BandejaApiService {

  private readonly baseUrl = '/api/bandeja';

  constructor(private http: HttpClient) {}

  buscar(filtro: FiltroBandeja): Observable<Comunicacion[]> {
    return this.http.post<Comunicacion[]>(
      `${this.baseUrl}/buscar`,
      filtro
    );
  }
}
