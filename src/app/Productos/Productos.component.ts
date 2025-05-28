import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Productos.component.html',
  styleUrls: ['./Productos.component.css'], // ← era `styleUrl` (mal escrito)
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductosComponent implements AfterViewInit {
  @ViewChild('verMasBtn') verMasBtn!: ElementRef<HTMLAnchorElement>;
  @ViewChild('cardTitle') cardTitle!: ElementRef<HTMLElement>;
  @ViewChild('cardDescription') cardDescription!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.verMasBtn.nativeElement.addEventListener('click', (event) => {
      event.preventDefault();
      this.mostrarDetalles();
    });
  }

  mostrarDetalles(): void {
    const titulo = this.cardTitle.nativeElement.innerText;
    const descripcion = this.cardDescription.nativeElement.innerText;
    
    console.log("Título:", titulo);
    console.log("Descripción:", descripcion);
    alert(`Detalles:\n${titulo}\n\n${descripcion}`);
  }
}
