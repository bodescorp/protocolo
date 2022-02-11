import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid"
import { User } from "./User";
import { Cargo } from "./Cargo";
import { Setor } from "./Setor";


@Entity("funcionarios")
class Funcionario {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    id_user: string
    @JoinColumn({ name: "id_user" })
    @ManyToOne(() => User)
    user: User

    @Column()
    id_setor: string
    @JoinColumn({ name: "id_setor" })
    @ManyToOne(() => Setor)
    setor: Setor

    @Column()
    id_cargo: string
    @JoinColumn({ name: "id_cargo" })
    @ManyToOne(() => Cargo)
    cargo: Cargo

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}




export { Funcionario };
