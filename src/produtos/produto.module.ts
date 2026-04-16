import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { ProdutoController } from './controller/produto.controller';
import { ProdutoService } from './service/produto.service';
import { CategoriaModule } from '../categoria/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto]),
    CategoriaModule,
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}