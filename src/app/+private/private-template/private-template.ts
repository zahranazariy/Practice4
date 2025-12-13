import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkWithHref, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-private-template',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLink],
  templateUrl: './private-template.html',
  styleUrl: './private-template.scss',
})
export class PrivateTemplate {
  router = inject(Router);
  logoff() {
    sessionStorage.clear();
    localStorage.removeItem('auth-token');
    this.router.navigateByUrl('/login');
  }

}
