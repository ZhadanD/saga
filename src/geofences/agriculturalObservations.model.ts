import { Column, DataType, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface AgriculturalObservationsCreationAttrs {
  // TODO доделать интерфейс
}

@Table({tableName: 'agriculturalObservations', createdAt: false, updatedAt: false})
export class AgriculturalObservations extends Model<AgriculturalObservations, AgriculturalObservationsCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
  id: bigint;

  @ApiProperty({example: '20,01,2022', description: 'Дата'})
  @Column({type: DataType.DATE, allowNull: false})
  date: string;

  @ApiProperty({example: '15:26', description: 'Время'})
  @Column({type: DataType.TIME, allowNull: false})
  time: string;

  @ApiProperty({example: '3054728:43:00', description: 'Координаты'})
  @Column({type: DataType.STRING, allowNull: false})
  coordinates: string;

  @ApiProperty({example: 'fdjkt3k4hu5gjkn34.jpg', description: 'Фото'})
  @Column({type: DataType.STRING, allowNull: false})
  image: string;

  @ApiProperty({example: 'Листик пожелтел', description: 'Комментарий'})
  @Column({type: DataType.STRING, allowNull: false})
  comment: string;
}
