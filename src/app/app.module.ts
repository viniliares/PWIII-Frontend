import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPagamentoComponent } from './lista-pagamento/lista-pagamento.component';
import { NovoPagamentoComponent } from './novo-pagamento/novo-pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPagamentoComponent,
    NovoPagamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
