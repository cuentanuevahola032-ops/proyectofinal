export interface Prestamos {
  id_prestamo: number;
  fecha_salida: string;
  vencimiento: string;
  cantidad_maxima: number;
  estado: number;
  id_usuario: number;
  id_libros: number;   // ✅ plural
}
