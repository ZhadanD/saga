import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTrailedVehiclesDto {

  @IsNotEmpty({message: 'Не должно быть пустым'})
  @IsString({message: 'Должно быть строкой'})
  @ApiProperty({example: 'Самоходная', description: 'Тип техники'})
  readonly typeOfEquipment: string;

  @IsNotEmpty({message: 'Не должно быть пустым'})
  @IsString({message: 'Должно быть строкой'})
  @ApiProperty({example: 'John Deere 8295R', description: 'Модель техники'})
  readonly modelEquipment: string;

  @IsNotEmpty({message: 'Не должно быть пустым'})
  @IsString({message: 'Должно быть строкой'})
  @ApiProperty({example: 'John Deere', description: 'Производитель'})
  readonly manufacturer: string;

  @IsNotEmpty({message: 'Не должно быть пустым'})
  @IsString({message: 'Должно быть строкой'})
  @ApiProperty({example: 'Трактор', description: 'Категория'})
  readonly category: string;

  @IsNotEmpty({message: 'Не должно быть пустым'})
  @IsString({message: 'Должно быть строкой'})
  @ApiProperty({example: '111233', description: 'Инвентарный номер'})
  readonly inventoryNumber: string;

  @IsNotEmpty({message: 'Не должно быть пустым'})
  @IsString({message: 'Должно быть строкой'})
  @ApiProperty({example: '22333', description: 'RFID номер'})
  readonly RFIDNumber: string;
}