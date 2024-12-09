import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PopupService {


  constructor() { }

  showMessage(
    type: 'success' | 'error' | 'warning' | 'info' | 'question',
    title: string, message: string): void {
    Swal.fire({
      title: title,
      text: message,
      icon: type,
      confirmButtonText:"Cerrar"
    })
  }
}
