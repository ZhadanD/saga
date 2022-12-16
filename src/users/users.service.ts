import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/createUser.dto";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService) {}

  async getUserByLogin(login: string): Promise<User | undefined> {
    return this.userRepository.findOne({where: {login: login}, include: {all: true}});
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({where: {email: email}, include: {all: true}});
  }

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue("USER"); // TODO по умолчанию роль USER
    await user.$set('roles', [role.id])
    user.roles = [role];
    return user;
  }
}
