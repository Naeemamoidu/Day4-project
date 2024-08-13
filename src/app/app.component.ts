import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DepartmentComponent } from './pages/department/department.component';
import { CardComponent } from "./unit/card/card.component";
import { getActiveConsumer } from '@angular/core/primitives/signals';
import { AccordionComponent } from './unit/accordion/accordion.component';
import { CarouselComponent } from './unit/carousel/carousel.component';
import { NavbarComponent } from './unit/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppComponent,AccordionComponent,CarouselComponent,CardComponent,NavbarComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fangular';
}
