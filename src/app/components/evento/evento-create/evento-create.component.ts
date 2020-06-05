import { Evento } from './../evento.model';
import { EventoService } from './../evento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css']
})
export class EventoCreateComponent implements OnInit {


  constructor(private eventoService: EventoService, private router: Router) { }

  ngOnInit(): void {
   
  }

  createEvento(): void{
    this.eventoService.showMessage("Evento cadastrado com sucesso!");
  }

  cancel(): void{
    this.router.navigate(['/evento']);
  }  

}

