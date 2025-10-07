import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';   // 👈 Import correcto
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module'; // 👈 Importa el routing

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LibrosComponent } from './libros/libros.component';
import { PrestamoComponent } from './prestamo/prestamo.component';
import { InformacionUsuariosComponent } from './informacion-usuarios/informacion-usuarios.component';
import { InformacionLibrosComponent } from './informacion-libros/informacion-libros.component';
import { InformacionPrestamoComponent } from './informacion-prestamo/informacion-prestamo.component';
import { LibroUsuariosComponent } from './libro-usuarios/libro-usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LibrosComponent,
    PrestamoComponent,
    InformacionUsuariosComponent,
    InformacionLibrosComponent,
    InformacionPrestamoComponent,
    LibroUsuariosComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,     // 👈 Necesario para ngModel
    CommonModule,
    AppRoutingModule // 👈 Necesario para router-outlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
