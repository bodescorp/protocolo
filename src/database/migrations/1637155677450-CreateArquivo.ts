import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateArquivo1637155677450 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "arquivos",
                columns: [
                    {
                        name: "key",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "originalname",
                        type: "varchar",
                    },
                    {
                        name: "mimetype",
                        type: "varchar"
                    },
                    {
                        name: "size",
                        type: "bigint"
                    },
                    {
                        name: "url",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                    

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("arquivos")

    }

}
