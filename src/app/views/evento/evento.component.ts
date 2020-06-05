import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Eventos',
      icon: 'login',
      routeUrl: '/evento'
    }
  }

  ngOnInit(): void {
  }

  navigateToEventoCreate(): void{
    this.router.navigate(['/evento/create'])
  }
}
