import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateSelfPropelledVehicleDto } from "./dto/createSelfPropelledVehicle.dto";
import { TechnicService } from "./technic.service";
import { CreateTrailedVehiclesDto } from "./dto/createTrailedVehicles.dto";
import { ValidationPipe } from "../pipes/validation.pipe";

@ApiTags('Контроллер техники')
@Controller('technic')
export class TechnicController {

  constructor(private technicService: TechnicService) {}

  @ApiOperation({summary: 'Создать самоходную технику'})
  @ApiResponse({status: 200, type: CreateSelfPropelledVehicleDto})
  @UsePipes(ValidationPipe) // TODO добавить guard
  @Post('/create_self_propelled_vehicle')
  createSelfPropelledVehicle(@Body() dto: CreateSelfPropelledVehicleDto): Promise<CreateSelfPropelledVehicleDto> {
    return this.technicService.createSelfPropelledVehicle(dto);
  }

  @ApiOperation({summary: 'Создать прицепную технику'})
  @ApiResponse({status: 200, type: CreateTrailedVehiclesDto})
  @UsePipes(ValidationPipe) // TODO добавить guard
  @Post('/create_trailed_vehicles')
  createTrailedVehicles(@Body() dto: CreateTrailedVehiclesDto): Promise<CreateTrailedVehiclesDto> {
    return this.technicService.createTrailedVehicles(dto);
  }
}
