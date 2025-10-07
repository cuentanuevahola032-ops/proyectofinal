import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = (pdfFonts as any).pdfMake?.vfs || (pdfFonts as any).vfs;

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {

  generarPDF(tipo: string) {
    let docDefinition: any;

    if (tipo === 'usuarios') {
      docDefinition = {
        pageSize: 'A4',
        pageOrientation: 'portrait',
        content: [
          { text: 'Usuarios', style: 'header' },
          {
            table: {
              widths: ['*', '*', '*', '*'],
              body: [
                ['Nombre', 'Correo Electrónico', 'Teléfono', 'Estado'],
                ['Moises', 'moises@mail.com', '12345678', 'Activo'],
                ['Ana', 'ana@mail.com', '87654321', 'Inactivo']
              ]
            },
            layout: 'lightHorizontalLines'
          }
        ],
        styles: {
          header: { fontSize: 12, bold: true, margin: [0, 5, 0, 5] },
          tableHeader: { bold: true, fontSize: 8 },
          tableContent: { fontSize: 7 }
        },
        defaultStyle: { fontSize: 7 }
      };
    } else if (tipo === 'libros') {
      docDefinition = {
        pageSize: 'A4',
        pageOrientation: 'landscape',
        content: [
          { text: 'Libros', style: 'header' },
          {
            table: {
              headerRows: 1,
              widths: [100, 90, 70, 50, 90, 60],
              body: [
                ['Título', 'Autor', 'Género', 'Código', 'ISBN', 'Estado'],
                [
                  'Cien Años de Soledad',
                  'Gabriel García Márquez',
                  'Novela',
                  '001',
                  '978-3-16-148410-0',
                  'Disponible'
                ],
                [
                  'Don Quijote de la Mancha',
                  'Miguel de Cervantes',
                  'Novela',
                  '002',
                  '978-84-376-0494-7',
                  'Prestado'
                ]
              ]
            },
            layout: 'lightHorizontalLines'
          }
        ],
        styles: {
          header: { fontSize: 12, bold: true, margin: [0, 5, 0, 5] },
          tableHeader: { bold: true, fontSize: 8 },
          tableContent: { fontSize: 7 }
        },
        defaultStyle: { fontSize: 7 }
      };
    } else if (tipo === 'prestamos') {
      docDefinition = {
        pageSize: 'A4',
        pageOrientation: 'portrait',
        content: [
          { text: 'Préstamos', style: 'header' },
          {
            table: {
              widths: ['*', '*', '*', '*', '*'],
              body: [
                ['Fecha Salida', 'Vencimiento', 'Cantidad Máxima', 'Estado', 'ID Usuario'],
                ['2025-09-24', '2025-10-01', '3', 'Activo', '1']
              ]
            },
            layout: 'lightHorizontalLines'
          }
        ],
        styles: {
          header: { fontSize: 12, bold: true, margin: [0, 2, 0, 8] },
          tableHeader: { bold: true, fontSize: 8 },
          tableContent: { fontSize: 7 }
        },
        defaultStyle: { fontSize: 7 }
      };
    } else if (tipo === 'libroUsuario') {
      docDefinition = {
        pageSize: 'A4',
        pageOrientation: 'portrait',
        content: [
          { text: 'Libros_Usuario', style: 'header' },
          {
            table: {
              widths: ['*', '*'],
              body: [
                ['ID Libro', 'ID Usuario'],
                ['1', '1'],
                ['2', '1']
              ]
            },
            layout: 'lightHorizontalLines'
          }
        ],
        styles: {
          header: { fontSize: 12, bold: true, margin: [0, 5, 0, 5] },
          tableHeader: { bold: true, fontSize: 8 },
          tableContent: { fontSize: 7 }
        },
        defaultStyle: { fontSize: 7 }
      };
    }

    pdfMake.createPdf(docDefinition).open();
  }
}
