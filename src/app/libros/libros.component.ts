import { Component } from '@angular/core';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  libro = {
    titulo: '',
    autor: '',
    genero_libro: '',
    codigo_libro: '',
    isbn: '',   // 👈 corregido
    estado: 1   // 👈 dale un valor inicial (0 o 1, nunca null)
  };


  constructor(private LibrosService: LibrosService) { }

  guardarLibro() {
    console.log('Libro guardado:', this.libro);
    this.LibrosService.addLibro(this.libro).subscribe({
      next: (res) => {
        console.log('Usuario guardado en backend:', res);
        alert('✅ Usuario guardado correctamente');
        // Reiniciar formulario si quieres:
        this.libro = {
          titulo: '',
          autor: '',
          genero_libro: '',
          codigo_libro: '',
          isbn: '',   // 👈 corregido
          estado: 1   // 👈 dale un valor inicial (0 o 1, nunca null)
        };
      },
      error: (err) => {
        console.error('Error al guardar libro:', err);
        alert('❌ Error al guardar libro');
      }
    })

  }



}
