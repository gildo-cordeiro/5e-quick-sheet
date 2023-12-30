import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Race } from './race.entity';
import { BaseEntity } from './base-entity.entity';
import { Class } from './class.entity';
import { Ability } from './ability.entity';
import { Spell } from './spell.entity';
import { Inventory } from './inventory.entity';
import { User } from './user.entity';

@Entity('character')
export class Character extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  name: string;

  @ManyToOne(() => Race, (Race) => Race.Character)
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
  @JoinTable({
    name: 'character_skill',
    joinColumn: {
      name: 'character_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'ability_id',
      referencedColumnName: 'id',
    },
  })
  skills: Ability[];

  @ManyToMany(() => Spell, (Spell) => Spell.character)
  @JoinTable({
    name: 'character_spell',
    joinColumn: {
      name: 'character_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'spell_id',
      referencedColumnName: 'id',
    },
  })
  spells: Spell[];

  @ManyToMany(() => Inventory, (Inventory) => Inventory.character)
  @JoinTable({
    name: 'character_inventory',
    joinColumn: {
      name: 'character_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'inventory_id',
      referencedColumnName: 'id',
    },
  })
  inventory: Inventory[];

  @ManyToMany(() => Ability, (Ability) => Ability.specialAbilities)
  @JoinTable({
    name: 'character_special_ability',
    joinColumn: {
      name: 'character_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'ability_id',
      referencedColumnName: 'id',
    },
  })
  specialAbilities: Ability[];

  @ManyToMany(() => User, (User) => User.characters)
  @JoinTable({
    name: 'user_character',
    joinColumn: {
      name: 'character_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
  })
  users: User[];
}
