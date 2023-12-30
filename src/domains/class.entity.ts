import { Entity, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { BaseEntity } from './base-entity.entity';
import { Character } from './character.entity';
import { Ability } from './ability.entity';

@Entity('class')
export class Class extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  classHitDice: number;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  levelProgression: string;

  @ManyToMany(() => Ability, (Ability) => Ability.classes)
  @JoinTable({
    name: 'class_ability',
    joinColumn: {
      name: 'class_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'ability_id',
      referencedColumnName: 'id',
    },
  })
  classAbilities: Ability[];

  @OneToMany(() => Character, (Character) => Character.class)
  character: Character[];
}
