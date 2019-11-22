import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPagamentoComponent } from './lista-pagamento/lista-pagamento.component';
import { NovoPagamentoComponent } from './novo-pagamento/novo-pagamento.component';

const routes: Routes = [
  { path: 'listagem', component: ListaPagamentoComponent},
  { path: 'novo', component: NovoPagamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
