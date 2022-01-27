import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPasswordColumnToUserTable1643036965832
  implements MigrationInterface
{
  name = 'AddPasswordColumnToUserTable1643036965832';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`password\` varchar(64) NOT NULL
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`password\`
        `);
  }
}
