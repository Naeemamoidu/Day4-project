import { Component } from '@angular/core';
import { AccordionComponent } from '../../unit/accordion/accordion.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
