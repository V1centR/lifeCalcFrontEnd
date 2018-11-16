import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import {HomePageComponent} from './home-page/home-page.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import {ProdutosComponent} from './produtos/produtos.component';
import { CentroDeCustoComponent } from './centro-de-custo/centro-de-custo.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
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
    path: 'relatorios',
    component: RelatoriosComponent
  },
  
  {
    path: 'centro-de-custos',
    component: CentroCustosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
