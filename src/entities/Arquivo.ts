import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"


@Entity("arquivos")
class Arquivo {

    @PrimaryColumn()
    readonly key: string;

    @Column()
    originalname: string;

    @Column()
    mimetype: string;

    @Column()
    size: number

    @Column()
    url: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
    
}

export { Arquivo }