import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conceitos-iniciais',
  templateUrl: './conceitos-iniciais.component.html',
  styleUrls: ['./conceitos-iniciais.component.css']
})
export class ConceitosIniciaisComponent implements OnInit {
  title = 'aula1';

  valor: number = 7;

  deletarCiclo: boolean = false;

  mudarValor() {
    this.valor++;
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }

  ngOnInit(){

  }

}
