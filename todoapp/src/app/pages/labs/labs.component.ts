import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Dennys Ferrer'
  tasks = [
    'Instalar Angular Cli',
    'Crear Proyecto',
    'Crear componentes'
  ]

}
