import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-perfiles',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './perfiles.component.html',
  styleUrl: './perfiles.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilesComponent { }
