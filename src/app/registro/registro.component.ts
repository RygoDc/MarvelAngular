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
      nombre: ['', [Validators.required]],
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


// this.registerForm.value as NewUser es lo mismo que nuevoUsuario

    this.registerService.createUser(this.registroForm.value as NewUser).subscribe({
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

