import { Component, OnInit } from '@angular/core';
import { MeucarrinhoService } from '../meucarrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meucarrinho-create',
  templateUrl: './meucarrinho-create.component.html',
  styleUrls: ['./meucarrinho-create.component.css']
})
export class MeucarrinhoCreateComponent implements OnInit {

  constructor(private meucarrinhoService: MeucarrinhoService, private router: Router) { }

  ngOnInit(): void {
   
  }

  createMeucarrinho(): void{
    this.meucarrinhoService.showMessage("Itens adicionados ao carrinho com sucesso!");
  }

  cancel(): void{
    this.router.navigate(['/meucarrinho']);
  }  

}




