import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { FieldRegistry } from "./fieldRegistry.model";
import { DirectoryOfCultures } from "./directoryOfCultures.model";
import { CropRotation } from "./cropRotation.model";
import { AgroOperations } from "../technic/agroOperations.model";

interface GeofencesCreationAttrs {
  // TODO доделать интерфейс
}

@Table({tableName: 'geofences', createdAt: false, updatedAt: false})
export class Geofences extends Model<Geofences, GeofencesCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
  id: bigint;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор реестра полей'})
  @ForeignKey(() => FieldRegistry)
  @Column({type: DataType.BIGINT, allowNull: false})
  fieldRegistry: bigint;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор культуры'})
  @ForeignKey(() => DirectoryOfCultures)
  @Column({type: DataType.BIGINT, allowNull: false})
  culture: bigint;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор севооборота'})
  @ForeignKey(() => CropRotation)
  @Column({type: DataType.BIGINT, allowNull: false})
  cropRotation: bigint;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор агро операции'})
  @ForeignKey(() => AgroOperations)
  @Column({type: DataType.BIGINT, allowNull: false})
  agroOperations: bigint;
}
