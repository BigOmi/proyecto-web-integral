import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Productos.component.html',
  styleUrl: './Productos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductosComponent { }
