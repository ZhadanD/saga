import { Column, DataType, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface MachineOperatorCreationAttrs {
  // TODO доделать интерфейс
}

@Table({tableName: 'machine_operators', createdAt: false, updatedAt: false})
export class MachineOperator extends Model<MachineOperator, MachineOperatorCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
  id: bigint;

  @ApiProperty({example: 'Иванов Иван Иванович', description: 'ФИО Механизатора'})
  @Column({type: DataType.STRING, allowNull: false})
  LFPMachineOperator: string;

  @ApiProperty({example: '459321', description: 'Код ключа-карты'})
  @Column({type: DataType.STRING, allowNull: false})
  keyCardCode: string;

  @ApiProperty({example: '1', description: 'Квалификация'})
  @Column({type: DataType.STRING, allowNull: false})
  qualification: string;

  @ApiProperty({example: '13412', description: 'Табельный номер'})
  @Column({type: DataType.STRING})
  serviceNumber: string;

  @ApiProperty({example: '', description: 'Отделение'})
  @Column({type: DataType.STRING})
  department: string;
}
