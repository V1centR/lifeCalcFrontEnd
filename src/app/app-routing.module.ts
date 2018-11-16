import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import {HomePageComponent} from './home-page/home-page.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import {ProdutosComponent} from './produtos/produtos.component';

const routes: Routes = [
  {
    path: '',
    component: LoginHomeComponent
  },
  {
    path: 'lista',
    component: ListaComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'centro-de-custo',
    component: ProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
