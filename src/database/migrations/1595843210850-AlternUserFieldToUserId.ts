import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlternUserFieldToUserId1595843210850
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'transactions',
      new TableColumn({
        name: 'user_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'transactions',
      new TableForeignKey({
        name: 'TransitionUser',
        columnNames: ['user_id'], // Relaciona o user_id com:
        referencedColumnNames: ['id'], // Este id => Vai se refletir no user_id
        referencedTableName: 'users', // Na tabela users
        onDelete: 'SET NULL', // Ao apagar o user vai ficar nulo, não vai ser apagado totalmente
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('transactions', 'TransitionUser');
    await queryRunner.dropColumn('transactions', 'user_id');
    await queryRunner.addColumn(
      'transactions',
      new TableColumn({
        name: 'user',
        type: 'varchar',
      }),
    );
  }
}
