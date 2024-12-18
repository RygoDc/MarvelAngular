import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { BehaviorSubject } from 'rxjs';
import { RegisterService } from '../services/auth/register.service';
import { NewUser } from '../services/interfaces/usuario';
import { PopupService } from '../services/utils/popup.service';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrl: './modal-add-user.component.scss'
})
export class ModalAddUserComponent {

  registerForm: FormGroup;
  
constructor(
  private formBuilder: FormBuilder,
  private registerService: RegisterService,
  private popupService: PopupService
) { 
  this.registerForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    email: ['', [Validators.required]],
    edad: ['', [Validators.required]]
  })
}

guardar():void{
  if(this.registerForm.invalid){
    return;
  }
    this.registerService.createUser(this.registerForm.value as NewUser).subscribe({
      next: () =>{
        this.popupService.loading("Registro Correcto", "Usuario creado con exito")
        setTimeout(() => {
          this.popupService.close();
          this.closeModal();
          window.location.reload();
        }, 2000)
      },
      error: error => {        
        console.log(error)                          
      }
    })

}

closeModal() {
    const modalElement = document.getElementById('modalUser');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
    }
  }
}
