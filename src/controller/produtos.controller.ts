import { ProdutosService } from './../service/produtos.service';
import { Produto } from './../model/produtos.model';
/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {

 constructor(private produtosService: ProdutosService){}

  @Get()
  getAll(): Produto[] {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  getById(@Param() produto): Produto {
    return this.produtosService.procurarPorId(produto.id);
  }

  @Post()
  create(@Body() produto: Produto){
    this.produtosService.criarProduto(produto);
  }

  @Put()
  update(@Body() produto: Produto) {
    this.produtosService.atualizarProduto(produto);
  }

  @Delete(':id')
  delete(@Param() produto){
    this.produtosService.deletaProduto(produto.id);
  }
}
