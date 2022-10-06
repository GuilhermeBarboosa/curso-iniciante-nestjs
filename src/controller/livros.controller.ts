import { Livros } from './../model/livros.model';
import { LivrosService } from './../service/livros.service';
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

@Controller('livros')
export class LivrosController {

 constructor(private livrosService: LivrosService){}

  @Get()
  getAll(): Livros[] {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  getById(@Param() livros): Livros {
    return this.livrosService.procurarPorId(livros.id);
  }

  @Post()
  create(@Body() livros: Livros){
    this.livrosService.criarLivros(livros);
  }

  @Put()
  update(@Body() livros: Livros) {
    this.livrosService.atualizarLivros(livros);
  }

  @Delete(':id')
  delete(@Param() livros){
    this.livrosService.deletaLivros(livros.id);
  }
}
