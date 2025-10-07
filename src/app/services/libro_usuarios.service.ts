import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LibroUsuario } from '../model/libro_usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class LibroUsuariosService {
  private apiUrl = 'http://localhost:3000/libroUsuario';  // Endpoint backend

  constructor(private http: HttpClient) { }

  addRelacion(relacion: LibroUsuario): Observable<any> {
    return this.http.post(this.apiUrl, relacion);
  }
}
