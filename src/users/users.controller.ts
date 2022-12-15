import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

  //constructor(private userRepository: UsersService) {}

  // @Get('/get_user/:login') TODO для тестов
  // getUser(@Param('login') login: string) {
  //   return this.userRepository.getUserByLogin(login);
  // }
}
