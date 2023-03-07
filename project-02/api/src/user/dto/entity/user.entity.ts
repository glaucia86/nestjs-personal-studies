/**
 * file: src/user/dto/entity/user.entity.ts
 * date: 03/07/2023
 * description: file responsible for the 'User' entity
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserEntity {

  @PrimaryGeneratedColumn({
    unsigned: true
  })
  id: number;

  @Column({
    length: 63
  })
  name: string;

  @Column({
    length: 127,
    unique: true
  })
  email: string;

  @Column({
    length: 127
  })
  password: string;

  @Column({
    type: 'date',
    nullable: true
  })
  birthday: string;

  @Column({
    enum: [1, 2]
  })
  role: number

  @CreateDateColumn()
  createdat: string;

  @UpdateDateColumn()
  updatedat: string;
}
