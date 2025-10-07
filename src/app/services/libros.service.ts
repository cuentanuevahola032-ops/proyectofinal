import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private apiUrl = 'http://localhost:3000/libros'; // Cambia la URL según tu backend

  constructor(private http: HttpClient) {}

  // Obtener todos los libros
  getLibros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Agregar un nuevo libro
  addLibro(libro: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, libro);
  }

  // ✅ Obtener libros disponibles
  getLibrosDisponibles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/disponibles`);
  }
}
