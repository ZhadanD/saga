import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { Geofences } from "../geofences/geofences.model";
import { Technic } from "../technic/technic.model";

interface OrganizationCreationAttrs {
 // TODO доделать интерфейс
}

@Table({tableName: 'organizations', createdAt: false, updatedAt: false})
export class Organization extends Model<Organization, OrganizationCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
  id: bigint;

  @ApiProperty({example: 'ООО Ромашка', description: 'Название организации'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  title: string;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор подразделения'})
  @ForeignKey(() => Organization)
  @Column({type: DataType.BIGINT, allowNull: false})
  divisions: bigint;

  @ApiProperty({example: 'с 07:00 до 19:00', description: 'Дневная смена'})
  @Column({type: DataType.STRING, allowNull: false})
  dayShift: string;

  @ApiProperty({example: 'с 19:00 до 7:00', description: 'Ночная смена'})
  @Column({type: DataType.STRING, allowNull: false})
  nightShift: string;

  @ApiProperty({example: '', description: 'Продолжительность фактических смен'})
  @Column({type: DataType.STRING})
  durationOfActualShifts: string; // TODO фиг пойми зачем

  @ApiProperty({example: '', description: 'Фактическое время начала смены'})
  @Column({type: DataType.STRING})
  actualShiftStartTime: string; // TODO фиг пойми зачем

  @ApiProperty({example: 'Время московское, +3 GTM', description: 'Часовой пояс'})
  @Column({type: DataType.STRING})
  timeZone: string;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор техники'})
  @ForeignKey(() => Technic)
  @Column({type: DataType.BIGINT, allowNull: false})
  technic: bigint;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор ГЕО зоны'})
  @ForeignKey(() => Geofences)
  @Column({type: DataType.BIGINT, allowNull: false})
  geofences: bigint;
}
