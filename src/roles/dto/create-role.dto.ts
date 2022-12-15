import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {

    @ApiProperty({example: 'USER', description: 'Название роли'})
    readonly value: string;

    @ApiProperty({example: 'Пользователь', description: 'Описание роли'})
    readonly description: string;
}