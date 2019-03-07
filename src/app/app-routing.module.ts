import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import {HomePageComponent} from './home-page/home-page.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import {ProdutosComponent} from './produtos/produtos.component';
import {CategoriesComponent} from './categories/categories.component';
import { CentroDeCustoComponent } from './centro-de-custo/centro-de-custo.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LoginHomeComponent
  },
  {path: 'lista',component: ListaComponent},
  {path: 'home',component: HomePageComponent},
  {path: 'categories',component: CategoriesComponent},
  {path: 'centro-de-custo',component: CentroDeCustoComponent},
  {path: 'relatorios', component: RelatoriosComponent},
  {path: 'dashboard', component: DashboardComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
