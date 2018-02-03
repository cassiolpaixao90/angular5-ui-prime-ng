import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';

import { AppComponent } from './app.component';
import { PesquisaLancamentoComponent } from './pesquisa-lancamento/pesquisa-lancamento.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PesquisaPessoaComponent } from './pesquisa-pessoa/pesquisa-pessoa.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component'


@NgModule({
  declarations: [
    AppComponent,
    PesquisaLancamentoComponent,
    NavbarComponent,
    PesquisaPessoaComponent,
    LancamentoCadastroComponent,
    PessoaCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
