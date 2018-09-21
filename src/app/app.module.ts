import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {PanelModule} from 'primeng/panel';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ListaComponent } from './lista/lista.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';

import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { LoginHomeComponent } from './login-home/login-home.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ListaComponent,
    LoginHomeComponent,
    HomePageComponent
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
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
