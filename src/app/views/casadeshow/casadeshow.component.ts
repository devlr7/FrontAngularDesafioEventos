import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-casadeshow',
  templateUrl: './casadeshow.component.html',
  styleUrls: ['./casadeshow.component.css']
})
export class CasadeshowComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Casa de Show',
      icon: 'storefront',
      routeUrl: '/casadeshow'
    }
  }

  ngOnInit(): void {
  }

  navigateToCasadeShowCreate(): void{
    this.router.navigate(['/casadeshow/create'])
  }

}
