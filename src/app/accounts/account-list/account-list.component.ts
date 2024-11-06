import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list'

@Component({
  selector: 'app-account-list',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.css'
})
export class AccountListComponent {

}
