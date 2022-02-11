import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateResposta1641818531856 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "respostas_demandas",
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "id_user",
                    type: "uuid",
                },
                {
                    name: "id_arquivo",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "id_demanda",
                    type: "uuid"
                },
                {
                    name: "message",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "status",
                    type: "uuid",
                    isNullable: true
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
                ],
                foreignKeys: [
                    {
                        name: "FKUserID",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_user"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKArquivoID",
                        referencedTableName: "arquivos",
                        referencedColumnNames: ["key"],
                        columnNames: ["id_arquivo"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKDemandaID",
                        referencedTableName: "demandas",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_demanda"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKStatusID",
                        referencedTableName: "status",
                        referencedColumnNames: ["id"],
                        columnNames: ["status"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }

                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("respostas_demandas");
    }

}
