import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { LoginHomeComponent } from './login-home/login-home.component';

const routes: Routes = [
  {
    path: '',
    component: LoginHomeComponent
  },
  {
    path: 'lista',
    component: ListaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
