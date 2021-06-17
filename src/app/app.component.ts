import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes: any[] = [
    {
      nome: 'Home',
      path: ''
    },
    {
      nome: 'Login',
      path: '/login'
    },
    {
      nome: 'Cursos',
      path: '/cursos'
    }
  ]
  title = 'primeiroProjeto';
  activeTab = this.routes[0];
  background = '#87eaff';
}
