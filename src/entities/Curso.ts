import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm"
import { v4 as uuid } from "uuid";

@Entity("cursos")
class Curso {
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { Curso }