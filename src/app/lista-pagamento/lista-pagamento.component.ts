import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-lista-pagamento',
  templateUrl: './lista-pagamento.component.html',
  styleUrls: ['./lista-pagamento.component.css']
})
export class ListaPagamentoComponent implements OnInit {

  pagamentos : Pagamento[];

  constructor(private service: PagamentoAPIService) { }

  ngOnInit() {
    this.service
    .getPagamentos()
    .subscribe((data: Pagamento[]) => this.pagamentos = data,
              error => console.log(error));
  }

}
