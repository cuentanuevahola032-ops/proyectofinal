import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-informacion-usuarios',
  templateUrl: './informacion-usuarios.component.html',
  styleUrls: ['./informacion-usuarios.component.css']
})
export class InformacionUsuariosComponent implements OnInit {

  usuarios: any[] = [];  // Aquí almacenamos los usuarios

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    // Obtener los usuarios desde el servicio
    this.usuariosService.getUsuarios().subscribe({
      next: data => {
        this.usuarios = data;
      },
      error: err => {
        console.error('Error al cargar usuarios', err);
      }
    });
  }

  // Método para manejar el clic en el botón "Acción"
  accion(idUsuario: number): void {
    console.log('Botón acción presionado para el ID Usuario:', idUsuario);
  }
}
