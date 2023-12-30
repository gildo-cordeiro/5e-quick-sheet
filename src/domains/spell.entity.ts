import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base-entity.entity';
import { Character } from './character.entity';

@Entity('spell')
export class Spell extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  name: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  spellLevel: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  schoolOfMagic: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  components: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  duration: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  range: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  effects: string;

  @OneToMany(() => Character, (Character) => Character.spells)
  character: Character[];
}
