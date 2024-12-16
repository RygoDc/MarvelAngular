import { Component, OnInit } from '@angular/core';
import { Users } from '../services/interfaces/usuario';
import { PopupService } from '../services/utils/popup.service';
import { GetUsersBdService } from '../services/auth/get-users-bd.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users : Users[] = []
  showNoData: boolean = false;

  constructor(
    private popupService: PopupService,
    private getUsersBdService: GetUsersBdService

  ) { }

  ngOnInit(): void {
    this.popupService.loading("Cargando datos", "Por favor espere, no sea impaciente...");
    
    this.getUsersBdService.getUsers().subscribe({
      next: data => {
        this.users = data;

        if(this.users.length <= 0){ 
          this.showNoData = true;
        }
        this.popupService.close();
      },
      error: error => {
        console.log(error);
      } 
      
    });
  
  }

}
