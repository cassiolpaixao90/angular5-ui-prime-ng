import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-lancamento',
  templateUrl: './pesquisa-lancamento.component.html',
  styleUrls: ['./pesquisa-lancamento.component.css']
})
export class PesquisaLancamentoComponent  {

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
