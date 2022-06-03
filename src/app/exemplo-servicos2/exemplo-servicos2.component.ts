import { Component, OnInit } from '@angular/core';
import { LoggrService } from '../loggr.service';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrls: ['./exemplo-servicos2.component.css']
})
export class ExemploServicos2Component {
  descricao = ""

  constructor(public logger: LoggrService){}

  adicionarDescricao(){
    this.logger.logar(`O produto de descricao '${this.descricao}' foi adicionado!`)
  }
}
