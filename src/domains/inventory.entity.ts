import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base-entity.entity';
import { Character } from './character.entity';

@Entity('inventory')
export class Inventory extends BaseEntity {
  @Column({ nullable: true, type: 'varchar' })
  itemName: string;

  @Column({ nullable: true, type: 'varchar' })
  itemType: string;

  @Column({ nullable: true, type: 'text' })
  description: string;

  @Column({ nullable: true })
  quantity: number;

  @Column({ nullable: true })
  weight: number;

  @Column({ nullable: true, type: 'varchar', array: true })
  otherAttributes: string[];

  @ManyToMany(() => Character, (Character) => Character.inventory)
  @JoinTable({
    name: 'character_inventory',
    joinColumn: {
      name: 'inventory_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'character_id',
      referencedColumnName: 'id',
    },
  })
  character: Character[];
}
