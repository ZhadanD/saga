import { Module } from '@nestjs/common';
import { TechnicService } from './technic.service';
import { TechnicController } from './technic.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { MachineOperator } from "./machineOperator.model";
import { Technic } from "./technic.model";
import { MonitoringSystem } from "./monitoringSystem.model";
import { AgroOperations } from "./agroOperations.model";
import { ListEquipment } from "./listEquipment.model";

@Module({
  providers: [TechnicService],
  controllers: [TechnicController],
  imports: [
    SequelizeModule.forFeature(
      [MachineOperator, Technic, MonitoringSystem, AgroOperations, ListEquipment]
    )
  ],
  exports: [SequelizeModule],
})
export class TechnicModule {}
