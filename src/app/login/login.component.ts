import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PopupService} from '../services/utils/popup.service';
import { LoginService } from '../services/auth/login.service';
import { LoginUser } from '../services/interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  changetype: boolean = false;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private popupService: PopupService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

togglePassword(): void {
  this.changetype = !this.changetype;
}

// enviar(): void {
//     if(this.loginForm.valid) {
//       this.loginService.login(this.loginForm.value as LoginUser).subscribe({
//         next: response => {
//           console.log(response);
//           this.popupService.showMessage(
//             "success",
//             "Login Correcto",
//             "Buenna perro entraste ");
//         },
//         error: error => {
//           console.log(error);
//           this.popupService.showMessage(
//             "error",
//             "Login Incorrecto",
//             "Que pena no entraste miau miau miau ");
//         }
//       })
//     } 
//   }

enviar(): void {
    if(this.loginForm.valid) {
      this.loginService.loginV2(this.loginForm.value as LoginUser).subscribe({
        next: response => {
          this.loginService.setUser(this.loginForm.value as LoginUser);         

          console.log(response);
          this.popupService.loading(
            "success",
            "Login Correcto, Buenna perro entraste ");

          setTimeout(() => {
            this.popupService.close();
            this.router.navigate(['/users']);
          }, 2000)
        },
        error: error => {
          if(error.status === 401){
            this.popupService.showMessage(
              "error",
              "Contraseña Incorrecta!!!",
              "Que pena no entraste miau miau miau ");
          }else{
            this.popupService.showMessage(
              "error",
              "Usuario no existe!!!",
              "Miau miau miau ");
          }
          
          
        }
      })
    } 
  }
  

}
