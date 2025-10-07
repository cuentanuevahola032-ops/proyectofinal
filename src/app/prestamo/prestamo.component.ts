import { Component, OnInit } from '@angular/core';
import { PrestamosService } from '../services/prestamo.service';
import { UsuariosService } from '../services/usuarios.service';
import { LibrosService } from '../services/libros.service';
import { LibroUsuariosService } from '../services/libro_usuarios.service';

import { Libros } from '../model/libros.model';
import { LibroUsuario } from '../model/libro_usuarios.model';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {

  listaDisponible: Libros[] = [];
  Usuarios: any[] = [];
  Libros: LibroUsuario[] = []
  // ✅ Definimos el tipo explícito de prestamo
  prestamo: {
    id_prestamo: string;
    fecha_salida: string;
    vencimiento: string;
    cantidad_maxima: string;
    id_usuario: string;
    id_libros: string;   // 👈 plural
    estado: number;
  } = {
      id_prestamo: '',
      fecha_salida: '',
      vencimiento: '',
      cantidad_maxima: '',
      id_usuario: '',
      id_libros: '',   // 👈 plural
      estado: 1
    };

  constructor(
    private prestamosService: PrestamosService,
    private usuariosService: UsuariosService,
    private librosService: LibrosService,
    private libroUsuarioService: LibroUsuariosService
  ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarLibros();
  }

  cargarUsuarios() {
    this.usuariosService.getUsuarios().subscribe({
      next: (data) => this.Usuarios = data,
      error: (err) => console.error('Error al cargar usuarios:', err)
    });
  }

  cargarLibros() {
    this.librosService.getLibros().subscribe({
      next: (data) => this.listaDisponible = data,
      error: (err) => console.error('Error al cargar libros:', err)
    });
  }

  onUsuarioChange(event: any) {
    const idUsuario = Number(event.target.value);
    const usuario = this.Usuarios.find(u => u.id_usuario === idUsuario);
    console.log("Usuario seleccionado:", usuario);
  }

  guardarPrestamo() {
    const prestamoParaEnviar = {
      fecha_salida: this.prestamo.fecha_salida,
      vencimiento: this.prestamo.vencimiento,
      cantidad_maxima: Number(this.prestamo.cantidad_maxima),
      id_usuario: Number(this.prestamo.id_usuario),
      id_libros: Number(this.prestamo.id_libros), // ✅ plural
      estado: this.prestamo.estado
    };

    this.prestamosService.addPrestamo(prestamoParaEnviar).subscribe({
      next: (res) => {
        console.log('✅ Préstamo guardado:', res);
        this.guardarRelacionLibroUsuario(this.prestamo.id_libros, this.prestamo.id_usuario);
      },
      error: (err) => {
        console.error('❌ Error al guardar préstamo:', err);
        alert('❌ Error al guardar préstamo');
      }
    });
  }

  guardarRelacionLibroUsuario(id_libros: any, id_usuario: any) {
    console.log(id_libros, id_usuario);

    const Libros = {
      id_libros: id_libros,
      id_usuario: id_usuario
    }

    this.libroUsuarioService.addRelacion(Libros).subscribe({
      next: (resRel) => {
        console.log('✅ Relación libro-usuario guardada:', resRel);
        alert('✅ Préstamo y relación libro-usuario guardados correctamente');
        this.limpiarFormulario();
      },
      error: (errRel) => {
        console.error('❌ Error al guardar relación libro-usuario:', errRel);
        alert('❌ Error al guardar relación libro-usuario');
      }
    });
  }

  limpiarFormulario() {
    this.prestamo = {
      id_prestamo: '',
      fecha_salida: '',
      vencimiento: '',
      cantidad_maxima: '',
      id_usuario: '',
      id_libros: '',   // ✅ plural
      estado: 1
    };
  }
}
