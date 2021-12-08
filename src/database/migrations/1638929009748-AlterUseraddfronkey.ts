import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AlterUseraddfronkey1638929009748 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            "users",
            new TableForeignKey({
                name: "FkCargoID",
                referencedTableName: "cargos",
                referencedColumnNames: ["id"],
                columnNames: ["cargo"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
