import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAspirationsTable1642431276980 implements MigrationInterface {
  name = 'CreateAspirationsTable1642431276980';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`aspiration\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`userId\` int NOT NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`aspiration\`
            ADD CONSTRAINT \`FK_c13adc58ddff982fed79dbea195\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`aspiration\` DROP FOREIGN KEY \`FK_c13adc58ddff982fed79dbea195\`
        `);
    await queryRunner.query(`
            DROP TABLE \`aspiration\`
        `);
  }
}
