import { Evento } from './evento.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  baseUrl = "http://localhost:8080/api/evento"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage (msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(evento: Evento): Observable<Evento>{
    
    return this.http.post<Evento>(this.baseUrl, evento)
  }


}
