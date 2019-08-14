import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Moeda, Conversao, ConversaoResponse } from '../models';
import { MoedaService, ConversorService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  private moedas: Moeda[];
  private conversao: Conversao;
  private possuiErro: boolean;
  private conversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService) { }

  ngOnInit() {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  /**
   * efetua a chamada para a conversao dos valores
   * 
   * @return void
   */
  init(): void {
    this.conversao = new Conversao('USD', 'BRL', null);
    this.possuiErro = false;
  }

  /**
   * efetua a conversao de valores
   * 
   * @return void
   */
  converter(): void {
    if (this.conversaoForm.form.valid) {
      alert('Convertendo: ' + JSON.stringify(this.conversao));
    }
  }

}
