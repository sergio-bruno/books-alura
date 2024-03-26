import { Router } from "@angular/router";
import { Component, OnInit, Output } from "@angular/core";
import { CardInterface } from "../components/card/card.interface";
import { ConsultaCepService } from "../service/consulta-cep.service";
import { NgForm } from "@angular/forms";

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

  constructor(
    private router: Router,
    private consultacepService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  consultaCEP(ev: any, f: NgForm) {
    const cep = ev.target.value;
    if (cep !== "") {
      this.consultacepService.getConsultaCep(cep).subscribe((resultado) => {
        console.log(resultado);
        this.populandoEndereco(resultado, f);
      });
    }
  }

  populandoEndereco(dados: any, f: NgForm){
    f.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(["./sucesso"]);
    } else {
      alert("Formulário inválido");
    }
    console.log(form.controls);
  }

}