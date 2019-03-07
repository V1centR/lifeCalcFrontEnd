import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {PanelModule} from 'primeng/panel';
import {FormsModule} from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ListaComponent } from './lista/lista.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {DropdownModule} from 'primeng/dropdown';
import {ChartModule} from 'primeng/chart';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { LoginHomeComponent } from './login-home/login-home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgxCurrencyModule } from "ngx-currency";
import { MenuInternoComponent } from './menu-interno/menu-interno.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CentroDeCustoComponent } from './centro-de-custo/centro-de-custo.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CalendarModule} from 'primeng/calendar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { LOCALE_ID } from '@angular/core';
import ptBr from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import {RadioButtonModule} from 'primeng/radiobutton';
import { CategoriesComponent } from './categories/categories.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ListaComponent,
    LoginHomeComponent,
    HomePageComponent,
    MenuInternoComponent,
    ProdutosComponent,
    CentroDeCustoComponent,
    RelatoriosComponent,
    DashboardComponent,
    CategoriesComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ButtonModule,
    MenubarModule,
    PanelModule,
    FormsModule,
    TabMenuModule,
    NgxCurrencyModule,
    DropdownModule,
    CheckboxModule,
    ChartModule,
    CalendarModule,
    MessagesModule,
    MessageModule,
    RadioButtonModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule {}
