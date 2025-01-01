import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-libros-recomendados',
  templateUrl: './slide-libros-recomendados.component.html',
  styleUrl: './slide-libros-recomendados.component.css'
})
export class SlideLibrosRecomendadosComponent {

  @Input() imagenUrl: string = '';
  @Input() titulo: string = '';
  @Input() autor: string = '';
  @Input() precio: number = 0;
  @Input() mostrarPrecio: boolean = true; // Valor predeterminado a 'true'
}
