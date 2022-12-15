import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {

  @ApiProperty({ example: 'DVZH', description: 'Логин пользователя' })
  @IsString({message: 'Должно быть строкой!'})
  @IsNotEmpty({message: 'Не должно быть пустым!'})
  login: string;

  @ApiProperty({ example: '1234567', description: 'Пароль пользователя' })
  @Length(5, 30, {message: 'Не меньше 5 и не больше 30!'})
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не должно быть пустым!'})
  password: string;

  @ApiProperty({ example: 'Жадан', description: 'Фамилия пользователя' })
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не должно быть пустым!'})
  lastName: string;

  @ApiProperty({ example: 'Даниил', description: 'Имя пользователя' })
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не должно быть пустым!'})
  firstName: string;

  @ApiProperty({ example: 'Валерьевич', description: 'Отчество пользователя' })
  @IsString({message: 'Должно быть строкой'})
  patronymic: string;

  @ApiProperty({ example: 'Генеральный директор', description: 'Должность пользователя' })
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не должно быть пустым!'})
  post: string;

  @ApiProperty({ example: '89601339450', description: 'Контактный номер телефона' })
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не должно быть пустым!'})
  contactPhoneNumber: string;

  @ApiProperty({ example: 'user@mail.ru', description: 'Почта пользователя' })
  @IsNotEmpty({message: 'Не должно быть пустым!'})
  @IsString({message: 'Должно быть строкой'})
  @IsEmail({}, {message: "Некорректный email"})
  email: string;

  @ApiProperty({ example: '1', description: 'Уникальный идентификатор организации' })
  @IsNotEmpty({message: 'Не должно быть пустым!'})
  organization: bigint;
}