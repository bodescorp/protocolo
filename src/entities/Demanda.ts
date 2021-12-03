import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Arquivo } from "./Arquivo";
import { Curso } from "./Curso";
import { Solicitacao } from "./Solicitacao";
import { User } from "./User";


@Entity("demandas")
class Demanda {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    id_user: string;

    @JoinColumn({ name: "id_user" })
    @ManyToOne(() => User)
    user: User;

    @Column()
    id_curso: string;

    @JoinColumn({ name: "id_curso" })
    @ManyToOne(() => Curso)
    curso: Curso;

    @Column()
    id_solicita: string;

    @JoinColumn({ name: "id_solicita" })
    @ManyToOne(() => Solicitacao)
    solicitacao: Solicitacao;

    @Column()
    id_arquivo: string;

    @JoinColumn({ name: "id_arquivo" })
    @ManyToOne(() => Arquivo)
    arquivo: Arquivo;

    @Column()
    message: string;

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

export { Demanda }