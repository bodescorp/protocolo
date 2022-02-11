import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AlterSolicitacoesAddfronkey1641788682512 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "solicitacoes",
            new TableForeignKey({
                name: "FKsetorID",
                referencedTableName: "setores",
                referencedColumnNames: ["id"],
                columnNames: ["id_setor"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("solicitacoes");
    }

}
