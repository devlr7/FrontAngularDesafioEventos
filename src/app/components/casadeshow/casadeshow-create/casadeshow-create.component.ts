import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CasadeshowService } from '../casadeshow.service';

@Component({
  selector: 'app-casadeshow-create',
  templateUrl: './casadeshow-create.component.html',
  styleUrls: ['./casadeshow-create.component.css']
})
export class CasadeshowCreateComponent implements OnInit {

  constructor(private casadeshowService: CasadeshowService, private router: Router) { }

  ngOnInit(): void {
   
  }

  createCasadeshow(): void{
    this.casadeshowService.showMessage("Casa de Show cadastrada com sucesso!");
  }

  cancel(): void{
    this.router.navigate(['/casadeshow']);
  }  

}


