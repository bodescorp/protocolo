import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid"
import { User } from "./User";
import { Curso } from "./Curso";


@Entity("alunos")
class Aluno {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    id_user: string
    @JoinColumn({ name: "id_user" })
    @ManyToOne(() => User)
    user: User

    @Column()
    id_curso: string
    @JoinColumn({ name: "id_curso" })
    @ManyToOne(() => Curso)
    curso: Curso

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




export { Aluno };
