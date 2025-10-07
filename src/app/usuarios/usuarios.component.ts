import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service'; // Asegúrate de que el path esté bien

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent {

  usuario = {
    nombre: '',
    correo_electronico: '',
    telefono: '',
    estado: 1
  };

  constructor(private usuariosService: UsuariosService) {}

  guardarUsuario() {
    this.usuariosService.addUsuario(this.usuario).subscribe({
      next: (res) => {
        console.log('Usuario guardado en backend:', res);
        alert('✅ Usuario guardado correctamente');
        // Reiniciar formulario si quieres:
        this.usuario = {
          nombre: '',
          correo_electronico: '',
          telefono: '',
          estado: 1
        };
      },
      error: (err) => {
        console.error('Error al guardar usuario:', err);
        alert('❌ Error al guardar usuario');
      }
    });
  }
}
