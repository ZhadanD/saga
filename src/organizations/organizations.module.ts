import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Organization } from "./organizations.model";
import { Geofences } from "../geofences/geofences.model";
import { Technic } from "../technic/technic.model";

@Module({
  providers: [OrganizationsService],
  controllers: [OrganizationsController],
  imports: [
    SequelizeModule.forFeature([Organization, Geofences, Technic])
  ],
})
export class OrganizationsModule {}
