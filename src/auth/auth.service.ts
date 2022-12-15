import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from "../users/dto/createUser.dto";

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.usersService.getUserByLogin(login);

    if(user) {
      const passwordEquals = await bcrypt.compare(pass, user.password);

      if (passwordEquals) {
        return user;
      }
    }

    return null;
  }

  async registration(userDto: CreateUserDto): Promise<{ access_token: string }> {
    const candidateByLogin = await this.usersService.getUserByLogin(userDto.login);

    if(candidateByLogin) {
      throw new HttpException('Недопустимый логин', HttpStatus.BAD_REQUEST);
    }

    const candidateByEmail = await this.usersService.getUserByEmail(userDto.email);

    if (candidateByEmail) {
      throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(userDto.password, 10);

    const user = await this.usersService.createUser({...userDto, password: hashPassword});
    return this.generateToken(user);
  }

  async generateToken(user: any) {
    const payload = { login: user.login, sub: user.id };

    return {access_token: this.jwtService.sign(payload)};
  }
}