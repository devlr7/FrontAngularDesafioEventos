
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import{ MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { HomeComponent } from './views/home/home.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { EventoComponent } from './views/evento/evento.component';
import { CasadeshowComponent } from './views/casadeshow/casadeshow.component';

import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { CasadeshowCreateComponent } from './components/casadeshow/casadeshow-create/casadeshow-create.component';

import { MeucarrinhoComponent } from './views/meucarrinho/meucarrinho.component';
import { MeucarrinhoCreateComponent } from './components/meucarrinho/meucarrinho-create/meucarrinho-create.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from'@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    UsuarioComponent,
    EventoComponent,
    CasadeshowComponent,
    UsuarioCreateComponent,
    EventoCreateComponent,
    CasadeshowCreateComponent,
    MeucarrinhoComponent,
    MeucarrinhoCreateComponent,
    UsuarioReadComponent,
    UsuarioUpdateComponent,
    UsuarioDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
