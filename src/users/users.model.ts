import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { Organization } from "../organizations/organizations.model";

interface UserCreationAttrs {
  login: string;
  password: string;
  lastName: string;
  firstName: string;
  patronymic: string;
  post: string;
  contactPhoneNumber: string;
  email: string;
  organization: number;
}

@Table({tableName: 'users', createdAt: false, updatedAt: false})
export class User extends Model<User, UserCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
  id: bigint;

  @ApiProperty({example: 'DVZH', description: 'Логин пользователя'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  login: string;

  @ApiProperty({example: '1234567', description: 'Пароль пользователя'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'USER', description: 'Роль пользователя в системе'})
  @Column({type: DataType.STRING, allowNull: false})
  role: string;

  @ApiProperty({example: 'Жадан', description: 'Фамилия пользователя'})
  @Column({type: DataType.STRING, allowNull: false})
  lastName: string;

  @ApiProperty({example: 'Даниил', description: 'Имя пользователя'})
  @Column({type: DataType.STRING, allowNull: false})
  firstName: string;

  @ApiProperty({example: 'Валерьевич', description: 'Отчество пользователя'})
  @Column({type: DataType.STRING})
  patronymic: string;

  @ApiProperty({example: 'Генеральный директор', description: 'Должность пользователя'})
  @Column({type: DataType.STRING, allowNull: false})
  post: string;

  @ApiProperty({example: '89601339450', description: 'Контактный номер телефона'})
  @Column({type: DataType.STRING, allowNull: false})
  contactPhoneNumber: string;

  @ApiProperty({example: 'user@mail.ru', description: 'Почта пользователя'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: '1', description: 'Уникальный идентификатор организации'})
  @ForeignKey(() => Organization)
  @Column({type: DataType.BIGINT, allowNull: false})
  organization: bigint;
}
