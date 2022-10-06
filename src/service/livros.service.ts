import { Livros } from './../model/livros.model';
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class LivrosService {
  listLivros: Livros[] = [
  //   new Livros('LIV003', 'Livro ABC', 5.0),
  //   new Livros('LIV004', 'Livro XYZ', 10.0),
  //   new Livros('LIV007', 'Livro Amarelo', 15.0),
   ];

  criarLivros(livros: Livros) {
    livros.id = 100;
    this.listLivros.push(livros);
  }

  atualizarLivros(livros: Livros) {
    return livros;
  }

  obterTodos(): Livros[] {
    return this.listLivros;
  }

  procurarPorId(id: number): Livros {
    return this.listLivros[id];
  }

  deletaLivros(id: number) {
    this.listLivros.pop();
  }
}
