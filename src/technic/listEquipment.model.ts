import { Column, DataType, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface ListEquipmentCreationAttrs {
  // TODO доделать интерфейс
}

@Table({tableName: 'listequipment', createdAt: false, updatedAt: false})
export class ListEquipment extends Model<ListEquipment, ListEquipmentCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
  id: bigint;

  @ApiProperty({example: 'Самоходная', description: 'Тип техники'})
  @Column({type: DataType.STRING, allowNull: false})
  typeOfEquipment: string;

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
  @Column({type: DataType.STRING})
  vehicleRegistrationNumber: string;

  @ApiProperty({example: 'GALILEOSKY BASE BLOCK', description: 'Модель прибора мониторинга'})
  @Column({type: DataType.STRING})
  modelMonitoringDevice: string;

  @ApiProperty({example: '352353085601233', description: 'IMEI прибора мониторинга'})
  @Column({type: DataType.STRING})
  IMEIMonitoringDevice: string;

  @ApiProperty({example: '111233', description: 'Инвентарный номер'})
  @Column({type: DataType.STRING})
  inventoryNumber: string;

  @ApiProperty({example: '22333', description: 'RFID номер'})
  @Column({type: DataType.STRING})
  RFIDNumber: string;
}
