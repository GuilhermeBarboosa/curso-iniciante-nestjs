import { LivrosService } from './service/livros.service';
import { LivrosController } from './controller/livros.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Livros } from './model/livros.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_DEV,
      password: process.env.SENHA_DEV,
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livros]),
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
