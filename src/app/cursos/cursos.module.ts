import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosService } from './cursos.service';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    CursosComponent,
    CursoNaoEncontradoComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    CursosRoutingModule
  ],
  providers: [CursosService]
})
export class CursosModule { }
