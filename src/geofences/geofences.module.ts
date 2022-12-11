import { Module } from '@nestjs/common';
import { GeofencesService } from './geofences.service';
import { GeofencesController } from './geofences.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Geofences } from "./geofences.model";
import { DirectoryOfCultures } from "./directoryOfCultures.model";
import { FieldRegistry } from "./fieldRegistry.model";
import { CropRotation } from "./cropRotation.model";
import { AgriculturalObservations } from "./agriculturalObservations.model";
import { TechnicModule } from "../technic/technic.module";
import { AgroOperations } from "../technic/agroOperations.model";

@Module({
  providers: [GeofencesService],
  controllers: [GeofencesController],
  imports: [
    SequelizeModule.forFeature(
      [
        Geofences, DirectoryOfCultures, FieldRegistry, CropRotation,
        AgriculturalObservations, AgroOperations
      ]
    ),
    TechnicModule,
  ],
})
export class GeofencesModule {}
