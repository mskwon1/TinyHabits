import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateActionsTable1642431637661 implements MigrationInterface {
  name = 'CreateActionsTable1642431637661';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`action\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`userId\` int NOT NULL,
                \`aspirationId\` int NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`action\`
            ADD CONSTRAINT \`FK_b2e3f7568dafa9e86ae03910111\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`action\`
            ADD CONSTRAINT \`FK_19856cbb56150ce4393566e9739\` FOREIGN KEY (\`aspirationId\`) REFERENCES \`aspiration\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`action\` DROP FOREIGN KEY \`FK_19856cbb56150ce4393566e9739\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`action\` DROP FOREIGN KEY \`FK_b2e3f7568dafa9e86ae03910111\`
        `);
    await queryRunner.query(`
            DROP TABLE \`action\`
        `);
  }
}
