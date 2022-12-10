import { Column, DataType, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface SelfPropelledEquipmentCreationAttrs {
  // TODO доделать интерфейс
}

@Table({tableName: 'selfPropelledEquipment', createdAt: false, updatedAt: false})
export class SelfPropelledEquipment extends Model<SelfPropelledEquipment, SelfPropelledEquipmentCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
  id: bigint;

  @ApiProperty({example: 'John Deere 8295R', description: 'Модель техники'})
  @Column({type: DataType.STRING, allowNull: false})
  modelEquipment: string;

  @ApiProperty({example: 'John Deere', description: 'Производитель'})
  @Column({type: DataType.STRING, allowNull: false})
  manufacturer: string;

  @ApiProperty({example: 'Трактор', description: 'Категория'})
  @Column({type: DataType.STRING, allowNull: false})
  category: string;

  @ApiProperty({example: '1231ТС 36', description: 'Регистрационный номер транспортного средства'})
  @Column({type: DataType.STRING, allowNull: false})
  vehicleRegistrationNumber: string;

  @ApiProperty({example: 'GALILEOSKY BASE BLOCK', description: 'Модель прибора мониторинга'})
  @Column({type: DataType.STRING, allowNull: false})
  modelMonitoringDevice: string;

  @ApiProperty({example: '352353085601233', description: 'IMEI прибора мониторинга'})
  @Column({type: DataType.STRING, allowNull: false})
  IMEIMonitoringDevice: string;
}
