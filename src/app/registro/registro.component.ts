import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PopupService } from '../services/utils/popup.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  registroForm: FormGroup;
  numbers: number[] = Array.from(Array(100).keys());

  constructor(
    private formBuilder: FormBuilder,
    private popupService: PopupService
  ) {
    this.registroForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repassword: ['', [Validators.required]]
    })
  }

  enviarRegistro(): void {
    if (this.registroForm.valid) {
      this.popupService.showMessage('success', 'Registro exitoso', 'Bienvenido a Marvel peeeeeeerrrrro');
    } else {
      this.popupService.showMessage('error', 'Error', 'Los datos introducidos no son validos, llora');
    }
  }
}
