import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Arquivo } from "./Arquivo";
import { Demanda } from "./Demanda";
import { Status } from "./Status";
import { User } from "./User";


@Entity("respostas_demandas")
class Resposta {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    id_user: string;

    @JoinColumn({ name: "id_user" })
    @ManyToOne(() => User)
    user: User;

    @Column()
    id_arquivo: string;

    @JoinColumn({ name: "id_arquivo" })
    @ManyToOne(() => Arquivo)
    arquivo: Arquivo;

    @Column()
    id_demanda: string;

    @JoinColumn({ name: "id_demanda" })
    @ManyToOne(() => Demanda)
    demanda: Demanda;

    @Column()
    status: string;

    @JoinColumn({ name: "status" })
    @ManyToOne(() => Status)
    statusId: Status;

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

export { Resposta }