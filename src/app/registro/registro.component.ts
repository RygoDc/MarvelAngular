import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PopupService } from '../services/utils/popup.service';
import { RegisterService } from '../services/auth/register.service';
import { NewUser } from '../services/interfaces/usuario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  changetype: boolean = false;
  registroForm: FormGroup;
  numbers: number[] = Array.from(Array(100).keys());

  constructor(
    private formBuilder: FormBuilder,
    private popupService: PopupService,
    private registerService: RegisterService
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
    if (this.registroForm.invalid)
      return;

    const nuevoUsuario: NewUser = {
      username: this.registroForm.get('username')?.value,
      password: this.registroForm.get('password')?.value,
      nombre: this.registroForm.get('name')?.value,
      email: this.registroForm.get('email')?.value,
      edad: this.registroForm.get('edad')?.value,
    }


// this.registerForm.value as NewUser es lo mismo que nuevoUsuario

    this.registerService.createUser(nuevoUsuario).subscribe({
      next: response => {
        console.log(response);
        this.popupService.showMessage(
          "success",
          "Registro Correcto", 
          " Entraste con exito peeeerrrrooo ",   
        )      
      },
      error: error => {
        console.log(error);
        this.popupService.showMessage(
          "error",
          "Registro Incorrecto",
          "no entraste miau miau miau " + error.message,   
        )
      }
    })
        
  }


  togglePassword(): void {
    this.changetype = !this.changetype;
  }

  
}

