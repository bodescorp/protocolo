import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Setor } from "./Setor";

@Entity("solicitacoes")
class Solicitacao {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    id_setor: string
    @JoinColumn({ name: "id_setor" })
    @ManyToOne(() => Setor)
    setor: Setor

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

export { Solicitacao }