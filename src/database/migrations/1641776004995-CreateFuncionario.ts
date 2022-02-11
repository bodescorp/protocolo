import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFuncionario1641776004995 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "funcionarios",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "id_user",
                        type: "uuid"
                    },
                    {
                        name: "id_setor",
                        type: "uuid"
                    },
                    {
                        name: "id_cargo",
                        type: "uuid"
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
                        name: "FKCargoID",
                        referencedTableName: "cargos",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_cargo"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKSetorID",
                        referencedTableName: "setores",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_setor"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("funcionarios")
    }

}
