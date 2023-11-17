import { Injectable } from '@nestjs/common';
import { Cliente } from './cliente';

@Injectable()
export class ClienteService {
  determinarTipoEmprestimo(cliente: Cliente): any {
    const { nome, salario, idade, localizacao } = cliente
    let loans = [];
    if (salario <= 3000 || salario <= 5000 && idade < 30 && localizacao === "SP") {
      loans.push(
        {
          type: 'PERSONAL',
          interest_rate: 4,
        },
        {
          type: "GUARANTEED",
          interest_rate: 3
        }
      )
    } else if (salario >= 5000) {
      loans.push({
        type: "CONSIGNMENT",
        interest_rate: 2
      })
    } else { return 'Empréstimo não disponível' }
    return {
      customer: nome,
      loans: loans
    };
  }
}
