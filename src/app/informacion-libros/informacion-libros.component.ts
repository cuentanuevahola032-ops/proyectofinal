import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../services/libros.service';  // Asegúrate que el servicio exista
import { Libros } from '../model/libros.model';  // Asegúrate que este modelo exista

@Component({
  selector: 'app-informacion-libros',
  templateUrl: './informacion-libros.component.html',
  styleUrls: ['./informacion-libros.component.css']
})
export class InformacionLibrosComponent implements OnInit {

  libros: Libros[] = [];  // Lista de libros que se obtienen del servicio

  constructor(private librosService: LibrosService) {}

  ngOnInit(): void {
    console.log('Componente Información Libros cargado');
    
    // Obtener los libros a través del servicio
    this.librosService.getLibros().subscribe({
      next: (data) => {
        console.log('Libros recibidos:', data);
        this.libros = data;
      },
      error: (err) => {
        console.error('Error al cargar los libros', err);
      }
    });
  }

  // Función para manejar el clic en el botón "Acción"
  accion(idLibro: number): void {
    console.log('Botón de acción presionado para el libro con ID:', idLibro);
    // Aquí puedes agregar la lógica que necesites, como abrir un modal, redirigir, etc.
  }
}
