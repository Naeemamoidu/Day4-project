import { Component } from '@angular/core';
import { CardComponent } from '../../unit/card/card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

}
