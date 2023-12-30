import { Entity, Column, OneToMany } from 'typeorm';
import { Character } from './character.entity';
import { BaseEntity } from './base-entity.entity';

@Entity('race')
export class Race extends BaseEntity {
  @Column({ nullable: true, type: 'varchar', unique: true })
  name: string;

  @Column({ nullable: true, type: 'text' })
  description: string;

  @Column({ nullable: true, type: 'varchar', array: true })
  attributeBonuses: string[];

  @Column({ nullable: true, type: 'varchar', array: true })
  specialRacialAbilities: string[];

  @Column({ nullable: true, type: 'varchar', array: true })
  attributeModifiers: string[];

  @OneToMany(() => Character, (Character) => Character.race)
  Character: Character[];
}
