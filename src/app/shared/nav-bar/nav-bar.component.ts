import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatTabsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  navLinks = [
    {
      routerLink: "/accounts",
      linkText: "Accounts"
    },
    {
      routerLink: "/fund-transfer",
      linkText: "Fund Transfer"
    },
    {
      routerLink: "/transaction-history",
      linkText: "Transaction History"
    }
  ]
  activeLink = this.navLinks[0].routerLink
}
