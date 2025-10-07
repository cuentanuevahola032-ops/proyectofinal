import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestamos } from '../model/prestamo.model';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  private apiUrl = 'http://localhost:3000/prestamos';

  constructor(private http: HttpClient) {}

  getPrestamos(): Observable<Prestamos[]> {
    return this.http.get<Prestamos[]>(this.apiUrl);
  }

  addPrestamo(prestamo: Omit<Prestamos, 'id_prestamo'>): Observable<any> {
    return this.http.post(this.apiUrl, prestamo);
  }
}
