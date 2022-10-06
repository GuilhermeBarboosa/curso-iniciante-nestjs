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
import { ExecException } from 'child_process';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  async getAll(): Promise<Livros[]> {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  async getById(@Param() livros): Promise<Livros> {
    return this.livrosService.procurarPorId(livros.id);
  }

  @Post()
  async create(@Body() livros: Livros) {
    return this.livrosService.criarLivros(livros);
  }

  @Put()
  async update(@Body() livros: Livros) {
    this.livrosService.atualizarLivros(livros);
  }

  @Delete(':id')
  async delete(@Param() livros) {
    this.livrosService.deletaLivros(livros.id);
  }
}
