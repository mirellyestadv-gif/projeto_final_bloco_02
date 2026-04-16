import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { IsNotEmpty } from "class-validator";

@Entity({ name: "tb_produtos" })
export class Produto {

  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column({ length: 100 })
  nome!: string;

  @Column("decimal")
  preco!: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: "CASCADE"
  })
  categoria!: Categoria;
}