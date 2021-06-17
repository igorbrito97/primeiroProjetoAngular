import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'iguinho.com.br';
  urlImagem: string = 'https://lorempixel.com/400/200/nature/';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  pessoa: any = {
    nome: 'ig',
    idade: 23
  }

  nomeCurso: string = "Angular"

  valorInicial: number = 5;


  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 2;
  }
  clickBotao() {
    alert('Clicou no botão meu consagrado(a)')
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log(evento);
    this.valorAtual = (<HTMLInputElement> evento.target).value;
  }

  salvarValor(value: string) {
    this.valorSalvo = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onChangeValor(evento: any) {
    console.log(evento.novoValor);
  }

}
