import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Roles } from "./roles-auth.decorator";
import { RolesGuard } from "../guards/roles.guard";
import { Role } from "./roles.model";

@ApiTags('Контроллер ролей')
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @ApiOperation({summary: 'Создать новую роль'})
    @ApiResponse({status: 200, type: Role})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/create_role')
    create(@Body() dto: CreateRoleDto): Promise<CreateRoleDto> {
        return this.roleService.createRole(dto);
    }
}
