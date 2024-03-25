import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
//import { HttpClient } from "@angular/common/http";
// import { map } from "rxjs/operators";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  
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