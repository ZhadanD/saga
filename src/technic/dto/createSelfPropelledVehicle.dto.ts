import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSelfPropelledVehicleDto {

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
  @ApiProperty({example: '1231ТС 36', description: 'Регистрационный номер транспортного средства'})
  readonly vehicleRegistrationNumber: string;

  @IsNotEmpty({message: 'Не должно быть пустым'})
  @IsString({message: 'Должно быть строкой'})
  @ApiProperty({example: 'GALILEOSKY BASE BLOCK', description: 'Модель прибора мониторинга'})
  readonly modelMonitoringDevice: string;

  @IsNotEmpty({message: 'Не должно быть пустым'})
  @IsString({message: 'Должно быть строкой'})
  @ApiProperty({example: '352353085601233', description: 'IMEI прибора мониторинга'})
  readonly IMEIMonitoringDevice: string;
}