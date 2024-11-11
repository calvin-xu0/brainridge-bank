import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'brainridge-bank';
}
