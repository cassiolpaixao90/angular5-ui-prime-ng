import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lancamentos = [
    {
      tipo: 'DESPESA',
      descricao: 'Compra de Pão',
      dataVencimento: '30/10/2018',
      dataPagamento: null,
      valor: 4.55,
      pessoa: 'Padaria do José'
    },
    {
      tipo: 'RECEITA',
      descricao: 'venda de software',
      dataVencimento: '30/10/2018',
      dataPagamento: '30/10/2018',
      valor: 4.55,
      pessoa: 'Atacado Brasil'
    },
    {
      tipo: 'RECEITA',
      descricao: 'Imposto',
      dataVencimento: '30/10/2018',
      dataPagamento: '30/10/2018',
      valor: 4.55,
      pessoa: 'Ministerio da fazenda'
    }

  ];
}
