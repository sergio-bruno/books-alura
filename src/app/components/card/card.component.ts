import { Component, Input, OnInit } from '@angular/core';
import { CardInterface } from './card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardInterface: CardInterface = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void { }

  larguraPensamento(): string {
    if(this.cardInterface.conteudo.length >= 256) {
      return 'card-interface-g'
    }
    return 'card-interface-p'
  }

}
