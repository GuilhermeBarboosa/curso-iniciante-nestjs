/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Produto } from 'src/model/produtos.model';

@Injectable()
export class ProdutosService {
  listProduto: Produto[] = [
    new Produto('LIV003', 'Livro ABC', 5.0),
    new Produto('LIV004', 'Livro XYZ', 10.0),
    new Produto('LIV007', 'Livro Amarelo', 15.0),
  ];

  criarProduto(produto: Produto) {
    produto.id = 100;
    this.listProduto.push(produto);
  }

  atualizarProduto(produto: Produto) {
    return produto;
  }

  obterTodos(): Produto[] {
    return this.listProduto;
  }

  procurarPorId(id: number): Produto {
    return this.listProduto[id];
  }

  deletaProduto(id: number) {
    this.listProduto.pop();
  }
}
