import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDemanda1636634643070 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "demandas",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    
                    {
                        name: "id_user",
                        type: "uuid",
                    },
                    {
                        name: "id_curso",
                        type: "uuid"
                    },
                    {
                        name: "id_solicita",
                        type: "uuid"
                    },
                    {
                        name: "id_arquivo",
                        type: "varchar"
                    },
                    {
                        name: "message",
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
                        name: "FKCursoID",
                        referencedTableName: "cursos",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_curso"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKSolicitaID",
                        referencedTableName: "solicitacoes",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_solicita"],
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
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("demandas");
    }

}
