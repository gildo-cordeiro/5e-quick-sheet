import { Entity, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base-entity.entity';
import { Character } from './character.entity';
import { Class } from './class.entity';

@Entity('ability')
export class Ability extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  name: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  abilityType: string;

  @ManyToMany(() => Character, (Character) => Character.specialAbilities)
  @JoinTable()
  specialAbilities: Character[];

  @ManyToMany(() => Character, (Character) => Character.skills)
  @JoinTable()
  skills: Character[];

  @ManyToMany(() => Class, (Class) => Class.classAbilities)
  @JoinTable()
  classes: Class[];
}
