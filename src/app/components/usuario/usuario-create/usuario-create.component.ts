import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})

export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: ''
  }

  constructor(private usuarioService: UsuarioService, 
      private router: Router) { }

  ngOnInit(): void {
   
  }

  createUsuario(): void{
    this.usuarioService.create(this.usuario).subscribe(() => {
      this.usuarioService.showMessage("Usuário cadastrado com sucesso!");
        this.router.navigate(['/usuario']);
    })
   
  }

  cancel(): void{
    this.router.navigate(['/usuario']);
  }  

}
