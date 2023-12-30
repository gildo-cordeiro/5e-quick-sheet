import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from './base-entity.entity';
import { Character } from './character.entity';

@Entity('user')
export class User extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  password: string;

  @ManyToMany(() => Character, (character) => character.users)
  @JoinTable({
    name: 'user_character',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'character_id',
      referencedColumnName: 'id',
    },
  })
  characters: Character[];
}
