import { Column, DataType, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface DirectoryOfCulturesCreationAttrs {
  // TODO доделать интерфейс
}

@Table({tableName: 'directory_of_cultures', createdAt: false, updatedAt: false})
export class DirectoryOfCultures extends Model<DirectoryOfCultures, DirectoryOfCulturesCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
  id: bigint;

  @ApiProperty({example: 'Пшеница Озимая', description: 'Культура'})
  @Column({type: DataType.STRING, allowNull: false})
  culture: string;

  @ApiProperty({example: 'Московская 56', description: 'Сорт'})
  @Column({type: DataType.STRING, allowNull: false})
  variety: string;

  @ApiProperty({example: 'РС2', description: 'Репродукция'})
  @Column({type: DataType.STRING, allowNull: false})
  reproduction: string;

  @ApiProperty({example: '0,528', description: 'Норма Высева кг/га'})
  @Column({type: DataType.DOUBLE, allowNull: false})
  seedingRate: number;

  @ApiProperty({example: '32', description: 'Плановая урожайность ц/га'})
  @Column({type: DataType.DOUBLE, allowNull: false})
  plannedYield: number;

  @ApiProperty({example: 'Озимая пшеница на зерно', description: 'Урожай'})
  @Column({type: DataType.STRING, allowNull: false})
  harvest: string;
}
