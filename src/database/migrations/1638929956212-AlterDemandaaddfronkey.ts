import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AlterDemandaaddfronkey1638929956212 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "demandas",
            new TableForeignKey({
                name: "FKUserID",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["id_user"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
            
        )
        await queryRunner.createForeignKey(
            "demandas",
            new TableForeignKey({
                name: "FKCursoID",
                referencedTableName: "cursos",
                referencedColumnNames: ["id"],
                columnNames: ["id_curso"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        )
        await queryRunner.createForeignKey(
            "demandas",
            new TableForeignKey({
                name: "FKSolicitaID",
                referencedTableName: "solicitacoes",
                referencedColumnNames: ["id"],
                columnNames: ["id_solicita"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        )
        await queryRunner.createForeignKey(
            "demandas",
            new TableForeignKey({
                name: "FKArquivoID",
                referencedTableName: "arquivos",
                referencedColumnNames: ["key"],
                columnNames: ["id_arquivo"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("demandas");
    }

}
