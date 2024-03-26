import { Router } from "@angular/router";
import { Component, OnInit, Output } from "@angular/core";
import { CardInterface } from "../components/card/card.interface";
//import { HttpClient } from "@angular/common/http";
// import { map } from "rxjs/operators";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  

  cardInterface: CardInterface = {
    id: 0,
    conteudo: 'Componente Card vindo do componente Cadastro',
    autoria: 'Sérgio Bruno',
    modelo: 'modelo2'
  }


  constructor(private router: Router) {}

  ngOnInit(): void {}

  cadastrar(form: any) {
    return form.valid ? this.router.navigate(['sucesso']) : alert('Formulário inválido');
  }

  // consultaCEP(cep: any, form: any) {
  //   cep = cep.value.replace(/\D/g, "");
  //   if (cep != "") {
  //     var validaCEP = /^[0-9]{8}$/;
  //     if (validaCEP.test(cep)) {
  //       this.http
  //         .get(`https://viacep.com.br/ws/${cep}/json/`)
  //         .subscribe((dados) => this.populaDadosForms(dados, form));
  //     }
  //   }
  // }
  // populaDadosForms(dados:any, form: any){
  //   form.setValue({
  //     nome: null, email: null, endereco: {rua: dados.logradouro,cep:dados.cep , numero: dados,complemento:dados.complemento , bairro: dados.bairro, cidade: dados.cidade, estado:dados.estado }
  //   })
  // }
}