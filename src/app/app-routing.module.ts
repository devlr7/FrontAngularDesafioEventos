

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { EventoComponent } from './views/evento/evento.component';
import { CasadeshowComponent } from './views/casadeshow/casadeshow.component';
import { MeucarrinhoComponent } from './views/meucarrinho/meucarrinho.component';

import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { CasadeshowCreateComponent } from './components/casadeshow/casadeshow-create/casadeshow-create.component';
import { MeucarrinhoCreateComponent } from './components/meucarrinho/meucarrinho-create/meucarrinho-create.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "usuario",
    component: UsuarioComponent
  },
  {
    path: "evento",
    component: EventoComponent
  },
  {
    path: "casadeshow",
    component: CasadeshowComponent
  },
  {
    path: "meucarrinho",
    component: MeucarrinhoComponent
  },
  {
    path: "usuario/create",
    component: UsuarioCreateComponent
  },
  {
    path: "evento/create",
    component: EventoCreateComponent
  },
  {
    path: "casadeshow/create",
    component: CasadeshowCreateComponent
  },
  {
    path: "meucarrinho/create",
    component: MeucarrinhoCreateComponent
  },
  {
    path: "usuario/update/:id",
    component: UsuarioUpdateComponent
  },
  {
    path: "usuario/delete/:id",
    component: UsuarioDeleteComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
