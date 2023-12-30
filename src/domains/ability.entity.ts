import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
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
  @JoinTable({
    name: 'character_special_ability',
    joinColumn: {
      name: 'ability_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'character_id',
      referencedColumnName: 'id',
    },
  })
  specialAbilities: Character[];

  @ManyToMany(() => Character, (Character) => Character.skills)
  @JoinTable({
    name: 'character_skill',
    joinColumn: {
      name: 'ability_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'character_id',
      referencedColumnName: 'id',
    },
  })
  skills: Character[];

  @ManyToMany(() => Class, (Class) => Class.classAbilities)
  @JoinTable({
    name: 'class_ability',
    joinColumn: {
      name: 'ability_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'class_id',
      referencedColumnName: 'id',
    },
  })
  classes: Class[];
}
