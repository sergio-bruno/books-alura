import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import { FormsModule } from '@angular/forms';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { CardComponent } from './components/card/card.component';
import { MaiorDeIdadeDirective } from './directives/maior-de-idade.directive';
import { ValidandoCepDirective } from './directives/validando-cep.directive';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CadastroComponent, SucessoCadastroComponent, MensagemComponent, CardComponent, MaiorDeIdadeDirective, ValidandoCepDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
