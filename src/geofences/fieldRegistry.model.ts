import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { DirectoryOfCultures } from "./directoryOfCultures.model";
import { CropRotation } from "./cropRotation.model";
import { AgriculturalObservations } from "./agriculturalObservations.model";

interface FieldRegistryCreationAttrs {
  // TODO доделать интерфейс
}

@Table({tableName: 'fieldRegistry', createdAt: false, updatedAt: false})
export class FieldRegistry extends Model<FieldRegistry, FieldRegistryCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
  id: bigint;

  @ApiProperty({example: '0022012.2255323.55555', description: 'Границы полей'})
  @Column({type: DataType.STRING, allowNull: false})
  fieldBoundaries: string;

  @ApiProperty({example: 'Поле 1', description: 'Наименование'})
  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @ApiProperty({example: '139', description: 'Площадь учётная (га), площадь по данным учетной системы'})
  @Column({type: DataType.INTEGER, allowNull: false})
  square: number;

  @ApiProperty({example: '139.01', description: 'Площадь виалон'})
  @Column({type: DataType.NUMBER, allowNull: false})
  vialonSquare: number;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор культуры'})
  @ForeignKey(() => DirectoryOfCultures)
  @Column({type: DataType.BIGINT, allowNull: false})
  culture: bigint;

  @ApiProperty({example: '', description: 'Фаза роста'})
  @Column({type: DataType.STRING})
  growthPhase: string;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор севооборота'})
  @ForeignKey(() => CropRotation)
  @Column({type: DataType.BIGINT, allowNull: false})
  cropRotation: bigint;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор агронаблюдения'})
  @ForeignKey(() => AgriculturalObservations)
  @Column({type: DataType.BIGINT, allowNull: false})
  agriculturalObservations: bigint;
}
