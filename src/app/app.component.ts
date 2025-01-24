import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'elibreria';

  articulos = [
    {
      imagenUrl: 'imagenes-libros/fotolibro1.png',
      titulo: 'La sombra del viento',
      autor: 'Gabriel García Márquez',
      precio: 5,
    },
    {
      imagenUrl: 'imagenes-libros/fotolibro2.png',
      titulo: 'A Book Cover',
      autor: 'Haruki Murakami',
      precio: 4555,
    },
    {
      imagenUrl: 'imagenes-libros/fotolibro3.png',
      titulo: 'A Book of the Book',
      autor: 'J.K. Rowling',
      precio: 48,
    },
    {
      imagenUrl: 'imagenes-libros/fotolibro4.png',
      titulo: 'Book',
      autor: 'Isabel Allende',
      precio: 98,
    },

  ];

  editoriales = [
    {
      imagenUrl: 'imagenes-editoriales/img-editorial-1.png'
    },
    {
      imagenUrl: 'imagenes-editoriales/img-editorial-1.png'
    },
    {
      imagenUrl: 'imagenes-editoriales/img-editorial-1.png'
    },
    {
      imagenUrl: 'imagenes-editoriales/img-editorial-1.png'
    }
  ]
}
