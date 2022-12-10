import { Column, DataType, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface TrailedEquipmentCreationAttrs {
  // TODO доделать интерфейс
}

@Table({tableName: 'trailedEquipment', createdAt: false, updatedAt: false})
export class TrailedEquipment extends Model<TrailedEquipment, TrailedEquipmentCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
  id: bigint;

  @ApiProperty({example: 'Primera DMC-9000', description: 'Модель техники'})
  @Column({type: DataType.STRING, allowNull: false})
  modelEquipment: string;

  @ApiProperty({example: 'AMAZONE', description: 'Производитель'})
  @Column({type: DataType.STRING, allowNull: false})
  manufacturer: string;

  @ApiProperty({example: 'Посевной комплекс', description: 'Категория'})
  @Column({type: DataType.STRING, allowNull: false})
  category: string;

  @ApiProperty({example: '111233', description: 'Инвентарный номер'})
  @Column({type: DataType.STRING, allowNull: false})
  inventoryNumber: string;

  @ApiProperty({example: '22333', description: 'RFID номер'})
  @Column({type: DataType.STRING, allowNull: false})
  RFIDNumber: string;
}
