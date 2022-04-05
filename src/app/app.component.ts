import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portifolio';
  width: number = window.innerWidth
  menuAtivo = false

  menu(){
    if(this.menuAtivo){
      this.menuAtivo = false
    } else {
      this.menuAtivo = true
    }
  }
}
