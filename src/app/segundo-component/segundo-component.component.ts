import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-component',
  templateUrl: './segundo-component.component.html',
  styleUrls: ['./segundo-component.component.css']
})
export class SegundoComponentComponent {
  nome = "luiz"
  dataNascimento = "1996-12-13"
  urlImage = "assets/terno.jpg"

  alertNascimento() {
    alert(`Data: ${this.dataNascimento}`)
  }
}
