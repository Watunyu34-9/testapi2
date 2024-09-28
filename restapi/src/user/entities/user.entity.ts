import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 50 })
    firstName: string;
  
    @Column({ length: 50 })
    lastName: string;
  
    @CreateDateColumn()
    createdAt: string;
}
