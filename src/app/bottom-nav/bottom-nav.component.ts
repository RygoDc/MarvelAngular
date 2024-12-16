import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/auth/login.service';
import { PopupService } from '../services/utils/popup.service';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss'
})
export class BottomNavComponent {

constructor(
  private popupService: PopupService,
  private loginService: LoginService,
  private router: Router
) { 

}

  logout(): void {
    this.popupService.loading("Cerrando Sesión", "Por favor espere, no sea impaciente...")	
    setTimeout(() => {
      this.popupService.close();
      this.loginService.deleteUser();
      this.router.navigate(['/login']);
    }, 2000)
  }
}
