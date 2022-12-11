import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { FieldRegistry } from "./fieldRegistry.model";

interface CropRotationCreationAttrs {
  // TODO доделать интерфейс
}

@Table({tableName: 'crop_rotation', createdAt: false, updatedAt: false})
export class CropRotation extends Model<CropRotation, CropRotationCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
  id: bigint;

  @ApiProperty({example: '1', description: 'Наименование поля'})
  @ForeignKey(() => FieldRegistry)
  @Column({type: DataType.BIGINT, allowNull: false})
  name: bigint;

  @ApiProperty({example: '139', description: 'Площадь засева'})
  @Column({type: DataType.INTEGER, allowNull: false})
  seedingArea: number;

  @ApiProperty({example: '2021', description: 'Сезон ( год уборки)'})
  @Column({type: DataType.STRING, allowNull: false})
  season: string;

  @ApiProperty({example: '01,09,2020', description: 'Дата начала работ'})
  @Column({type: DataType.DATE, allowNull: false})
  startDateOfWork: string;

  @ApiProperty({example: '30,10,2021', description: 'Дата окончания работ'})
  @Column({type: DataType.DATE, allowNull: false})
  dateOfCompletionOfWorks: string;
}
