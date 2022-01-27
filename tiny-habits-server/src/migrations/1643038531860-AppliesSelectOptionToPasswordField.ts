import {MigrationInterface, QueryRunner} from "typeorm";

export class AppliesSelectOptionToPasswordField1643038531860 implements MigrationInterface {
    name = 'AppliesSelectOptionToPasswordField1643038531860'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`password\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`password\` varchar(64) NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`password\`
        `);
        await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`password\` varchar(64) NOT NULL
        `);
        await queryRunner.query(`
            CREATE UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\` (\`email\`)
        `);
    }

}
