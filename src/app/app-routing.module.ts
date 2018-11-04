import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import {HomePageComponent} from './home-page/home-page.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import {ProdutosComponent} from './produtos/produtos.component';
import {CentroCustosComponent} from './centro-custos/centro-custos.component';

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
    path: 'centro-de-custos',
    component: CentroCustosComponent
  }

  //centro-de-custos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
