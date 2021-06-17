import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      {
        id: 1,
        nome: 'Angular'
      },
      {
        id: 2,
        nome: 'React'
      }
    ]
  }

  getCurso(id: number){
    let cursos = this.getCursos();
    return cursos.find((item) => item.id == id)
  }
}
