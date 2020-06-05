import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-meucarrinho',
  templateUrl: './meucarrinho.component.html',
  styleUrls: ['./meucarrinho.component.css']
})
export class MeucarrinhoComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Meu Carrinho',
      icon: 'add_shopping_cart',
      routeUrl: '/meucarrinho'
    }
   }

  ngOnInit(): void {
  }

  navigateToMeucarrinhoCreate(): void{
    this.router.navigate(['/meucarrinho/create'])
  }
  
}
