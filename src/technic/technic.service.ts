import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { ListEquipment } from "./listEquipment.model";
import { CreateSelfPropelledVehicleDto } from "./dto/createSelfPropelledVehicle.dto";
import { CreateTrailedVehiclesDto } from "./dto/createTrailedVehicles.dto";

@Injectable()
export class TechnicService {

  constructor(@InjectModel(ListEquipment) private listEquipmentRepository: typeof ListEquipment) {}

  async createSelfPropelledVehicle(dto: CreateSelfPropelledVehicleDto): Promise<CreateSelfPropelledVehicleDto> {
    return await this.listEquipmentRepository.create(dto);
  }

  async createTrailedVehicles(dto: CreateTrailedVehiclesDto): Promise<CreateTrailedVehiclesDto> {
    return await this.listEquipmentRepository.create(dto);
  }
}
