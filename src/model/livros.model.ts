/* eslint-disable prettier/prettier */
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class Livros extends Model<Livros>{
  
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  codigo: string;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  preco: number;

}
