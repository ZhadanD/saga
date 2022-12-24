import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from "../users/dto/createUser.dto";
import { User } from "../users/users.model";

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(login: string, pass: string): Promise<User | null> {
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

    await this.loginVerification(userDto);
    await this.emailVerification(userDto);

    const hashPassword = await bcrypt.hash(userDto.password, 10);

    const user = await this.usersService.createUser({...userDto, password: hashPassword});
    return this.generateToken(user);
  }

  async loginVerification(userDto: CreateUserDto): Promise<void> {
    const candidateByLogin = await this.usersService.getUserByLogin(userDto.login);

    if(candidateByLogin) {
      throw new HttpException('Недопустимый логин', HttpStatus.BAD_REQUEST);
    }
  }

  async emailVerification(userDto: CreateUserDto): Promise<void> {
    const candidateByEmail = await this.usersService.getUserByEmail(userDto.email);

    if (candidateByEmail) {
      throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST);
    }
  }

  async generateToken(user: any): Promise<{access_token: string}> {
    const payload = { login: user.login, sub: user.id, roles: user.roles };

    return {access_token: this.jwtService.sign(payload)};
  }
}
