import { Component, OnInit } from '@angular/core';
import { PrestamosService } from '../services/prestamo.service';  // Asegúrate que el nombre del archivo sea correcto
import { Prestamos } from '../model/prestamo.model';  // Asegúrate que esta interfaz exista

@Component({
  selector: 'app-informacion-prestamo',
  templateUrl: './informacion-prestamo.component.html',
  styleUrls: ['./informacion-prestamo.component.css']
})
export class InformacionPrestamoComponent implements OnInit {

  prestamos: Prestamos[] = [];

  constructor(private prestamosService: PrestamosService) {}

  ngOnInit(): void {
    console.log('Componente Información Préstamo cargado');

    // Cargar los préstamos desde el servicio
    this.prestamosService.getPrestamos().subscribe({
      next: (data) => {
        console.log('Préstamos recibidos:', data);
        this.prestamos = data;
      },
      error: (err) => {
        console.error('Error al cargar préstamos', err);
      }
    });
  }

  // Definir la acción para el botón (solo un ejemplo de acción)
  accion(idPrestamo: number): void {
    console.log('Botón acción presionado para el préstamo con ID:', idPrestamo);
    // Aquí puedes agregar cualquier lógica que desees, como eliminar, mostrar detalles, etc.
  }
}
