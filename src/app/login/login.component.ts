import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PopupService} from '../services/utils/popup.service';

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
    private popupService: PopupService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

togglePassword(): void {
  this.changetype = !this.changetype;
}

enviar(): void {
    if(this.loginForm.invalid) {
      return this.popupService.showMessage("error", "Login Incorrecto","Que pena no entraste miau miau miau")
    }
    this.popupService.showMessage(
      "success",
      "Login Correcto",
      "Buenna perro entraste")
}
}
