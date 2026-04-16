import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Produto } from "../../produtos/entities/produto.entity";

@Entity({ name: "tb_categorias" })
export class Categoria {

  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column({ length: 100 })
  nome!: string;
    



@OneToMany(() => Produto, (produto) => produto.categoria)
produto!: Produto[];

}