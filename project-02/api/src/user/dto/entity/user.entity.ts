/**
 * file: src/user/dto/entity/user.entity.ts
 * date: 03/07/2023
 * description: file responsible for the 'User' entity
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import { Role } from "src/enums/role.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
  name: 'users'
})
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
  birthday: Date;

  @Column({
    default: 1
  })
  role: number

  @CreateDateColumn()
  createdat: string;

  @UpdateDateColumn()
  updatedat: string;
}
