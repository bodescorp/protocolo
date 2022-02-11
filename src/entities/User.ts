
import { Exclude } from "class-transformer";
import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToMany, ManyToOne} from "typeorm";
import {v4 as uuid} from "uuid"
import { Cargo } from "./Cargo";


@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;
    
    @Column()
    matricula: number;

    @Exclude()
    @Column()
    password: string;
        
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




export {User};
