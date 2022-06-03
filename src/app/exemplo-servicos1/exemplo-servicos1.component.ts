import { Component, OnInit } from '@angular/core';
import { LoggrService } from '../loggr.service';

@Component({
  selector: 'app-exemplo-servicos1',
  templateUrl: './exemplo-servicos1.component.html',
  styleUrls: ['./exemplo-servicos1.component.css']
})
export class ExemploServicos1Component  {
  nome = ""

  constructor (private logger: LoggrService) {}

  adicionarNome(){
    this.logger.logar(`O nome ${this.nome} foi adicionado!`)
  }


}
