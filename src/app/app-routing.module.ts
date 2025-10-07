import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { LibrosTablaComponent } from './libros-tabla/libros-tabla.component';
import { PrestamoComponent } from './prestamo/prestamo.component';
import { InformacionUsuariosComponent } from './informacion-usuarios/informacion-usuarios.component';
import { InformacionLibrosComponent } from './informacion-libros/informacion-libros.component';
import { InformacionPrestamoComponent } from './informacion-prestamo/informacion-prestamo.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'libros', component: LibrosTablaComponent },
  { path: 'prestamo', component: PrestamoComponent },
  { path: 'informacion-usuarios', component: InformacionUsuariosComponent },
  { path: 'informacion-libros', component: InformacionLibrosComponent },
  { path: 'informacion-prestamo', component: InformacionPrestamoComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: '**', redirectTo: 'usuarios' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
