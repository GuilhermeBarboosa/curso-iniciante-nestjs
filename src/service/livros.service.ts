import { Livros } from './../model/livros.model';
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Observable } from 'rxjs';

@Injectable()
export class LivrosService { 
   constructor(
    @InjectModel(Livros)
    private livroModel: typeof Livros)
    {}

  async criarLivros(livro: Livros): Promise<Livros> {
    return this.livroModel.create(livro);
  }

  async atualizarLivros(livro: Livros): Promise<[number, Livros[]]> {
    return this.livroModel.update(livro, {
      where:{
        id: livro.id
      }
    });
  }

  async obterTodos(): Promise<Livros[]> {
    return this.livroModel.findAll();
  }

  async procurarPorId(id: number): Promise<Livros> {
    return this.livroModel.findByPk(id);
  }

  async deletaLivros(id: number) {
    const livro: Livros = await this.procurarPorId(id);
    livro.destroy();
  }
}
