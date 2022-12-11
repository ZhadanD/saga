import { Column, DataType, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface MonitoringSystemCreationAttrs {
  // TODO доделать интерфейс
}

@Table({tableName: 'monitoring_system', createdAt: false, updatedAt: false})
export class MonitoringSystem extends Model<MonitoringSystem, MonitoringSystemCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
  id: bigint;

  @ApiProperty({example: '', description: 'Url'})
  @Column({type: DataType.STRING})
  url: string;

  @ApiProperty({example: '', description: 'Ip адрес'})
  @Column({type: DataType.STRING})
  ip: string;

  @ApiProperty({example: 'DVZH', description: 'Логин'})
  @Column({type: DataType.STRING})
  login: string;

  @ApiProperty({example: '3hb543u34b5y34k', description: 'Пароль'})
  @Column({type: DataType.STRING})
  password: string;
}
