import { Controller, Post, Body } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('tipo-emprestimo')
  determinarTipoEmprestimo(@Body() cliente: Cliente) {
    return this.clienteService.determinarTipoEmprestimo(cliente);
  }
}
