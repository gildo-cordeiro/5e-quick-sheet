import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Race } from './race.entity';
import { BaseEntity } from './base-entity.entity';
import { Class } from './class.entity';
import { Ability } from './ability.entity';
import { Spell } from './spell.entity';
import { Inventory } from './inventory.entity';

@Entity('character')
export class Character extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  name: string;

  @ManyToOne(() => Race, (Race) => Race.Character )
  race: Race;

  @ManyToOne(() => Class, (Class) => Class.character)
  class: Class;

  @Column({ nullable: true })
  level: number;

  @Column({ nullable: true })
  experiencePoints: number;

  @Column({ nullable: true })
  hitPoints: number;

  @Column({ nullable: true })
  manaPoints: number;

  @Column({ nullable: true })
  strength: number;

  @Column({ nullable: true })
  dexterity: number;

  @Column({ nullable: true })
  constitution: number;

  @Column({ nullable: true })
  intelligence: number;

  @Column({ nullable: true })
  wisdom: number;

  @Column({ nullable: true })
  charisma: number;

  @ManyToMany(() => Ability, (Ability) => Ability.skills)
  @JoinTable()
  skills: Ability[];

  @ManyToMany(() => Spell, (Spell) => Spell.character)
  @JoinTable()
  spells: Spell[];

  @ManyToMany(() => Inventory, (Inventory) => Inventory.character)
  @JoinTable()
  inventory: Inventory[];

  @ManyToMany(() => Ability, (Ability) => Ability.specialAbilities)
  @JoinTable()
  specialAbilities: Ability[];
}
