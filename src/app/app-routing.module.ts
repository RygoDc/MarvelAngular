import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {PanelControlComponent} from './panel-control/panel-control.component';
import {LayoutConHeaderComponent} from './layout-con-header/layout-con-header.component';
import { RegistroComponent } from './registro/registro.component';
import { UsersComponent } from './users/users.component';
import { isLoggedGuard } from './services/guards/is-logged.guard';

const routes: Routes = [
  {path:"", redirectTo: "login", pathMatch: "full"},
  
  
  {path:"login", component: LoginComponent},
  {path:"registro", component: RegistroComponent},
  {
    path: "", component: LayoutConHeaderComponent, canActivate: [isLoggedGuard], 
    children: [
      {path: "users", component: UsersComponent},    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
