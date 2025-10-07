import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  private baseUrl = 'http://localhost:3000'; // ajústalo si tu backend está en otra URL

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/usuarios`);
  }

  getLibros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/libros`);
  }

  getPrestamos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/prestamos`);
  }

  getLibroUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/libroUsuario`);
  }
}
