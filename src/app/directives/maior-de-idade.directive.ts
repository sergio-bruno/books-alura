import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";

@Directive({
  selector: '[appMaiorDeIdade]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MaiorDeIdadeDirective, multi: true },
  ],  
})
export class MaiorDeIdadeDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors|null {

    const dataNasc = control.value;
    const dataNascPartVerficada = dataNasc || ''
    
    const dataNascPart = dataNascPartVerficada.split("-").map(Number);
    let dataNascMais18anos = new Date(
      dataNascPart[0] + 18,
      dataNascPart[1] - 1,
      dataNascPart[2]
    );
    const dataAtual = new Date();
    const maiorIdade = dataNascMais18anos <= dataAtual;
    return maiorIdade ? null : {'menorIdade' : true}; 
  }
}
