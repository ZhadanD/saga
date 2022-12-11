import { Column, DataType, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface AgroOperationsCreationAttrs {
  // TODO доделать интерфейс
}

@Table({tableName: 'agro_operations', createdAt: false, updatedAt: false})
export class AgroOperations extends Model<AgroOperations, AgroOperationsCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
  id: bigint;

  @ApiProperty({example: 'Боронование', description: 'Наименование операции'})
  @Column({type: DataType.STRING, allowNull: false})
  nameOperation: string;

  @ApiProperty({example: 'га', description: 'ЕИ техоперации'})
  @Column({type: DataType.STRING, allowNull: false})
  unitMeasurementTechnicalOperation: string;

  @ApiProperty({example: '7', description: 'Ширина обработки(м)'})
  @Column({type: DataType.DOUBLE, allowNull: false})
  processingWidth: number;

  @ApiProperty({example: '7', description: 'Скорость обработки (км/ч)'})
  @Column({type: DataType.INTEGER, allowNull: false})
  processingSpeed: number;

  @ApiProperty({example: '2,7', description: 'Расход топлива (лт/га)'})
  @Column({type: DataType.DOUBLE, allowNull: false})
  fuelConsumption: number;

  @ApiProperty({example: 'МТЗ1221', description: 'Основная единица'})
  @Column({type: DataType.STRING, allowNull: false})
  basicUnit: string;

  @ApiProperty({example: 'БЗСС-21', description: 'Прицепное оборудование'})
  @Column({type: DataType.STRING, allowNull: false})
  trailedEquipment: string;

  @ApiProperty({example: '54', description: 'Норма выработки ЕИ/смену'})
  @Column({type: DataType.DOUBLE, allowNull: false})
  productionRate: number;

  @ApiProperty({example: '6,77', description: 'Расценка руб/ЕИ'})
  @Column({type: DataType.DOUBLE, allowNull: false})
  pricing: number;

  @ApiProperty({example: '365,78', description: 'Тариф'})
  @Column({type: DataType.DOUBLE, allowNull: false})
  rate: number;
}
