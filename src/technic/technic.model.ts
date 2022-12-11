import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { MachineOperator } from "./machineOperator.model";
import { MonitoringSystem } from "./monitoringSystem.model";
import { ListEquipment } from "./listEquipment.model";

interface TechnicCreationAttrs {
  // TODO доделать интерфейс
}

@Table({tableName: 'technic', createdAt: false, updatedAt: false})
export class Technic extends Model<Technic, TechnicCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
  id: bigint;

  @ApiProperty({example: 'Самоходная', description: 'Тип техники'})
  @Column({type: DataType.STRING, allowNull: false})
  typeOfEquipment: string;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор системы мониторинга'})
  @ForeignKey(() => MonitoringSystem)
  @Column({type: DataType.BIGINT, allowNull: false})
  monitoringSystem: bigint;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор модели техники'})
  @ForeignKey(() => ListEquipment)
  @Column({type: DataType.BIGINT, allowNull: false})
  modelEquipment: bigint;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор механизатора'})
  @ForeignKey(() => MachineOperator)
  @Column({type: DataType.BIGINT, allowNull: false})
  machineOperator: bigint;

  @ApiProperty({example: '1', description: 'Прикрепление механизатора к технике'})
  @Column({type: DataType.STRING, allowNull: false})
  attachmentOfTheMachineOperatorToTheEquipment: string; // TODO фиг пойми зачем
}
