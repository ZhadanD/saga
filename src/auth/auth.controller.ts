import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Controller, Request, Post, UseGuards, Body, UsePipes } from "@nestjs/common";
import { LocalAuthGuard } from "../guards/localAuth.guard";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/createUser.dto";
import { ValidationException } from "../exceptions/validation.exception";

@ApiTags('Контроллер авторизации и регистрации пользователя')
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @ApiOperation({summary: 'Авторизация пользователя'})
  @ApiResponse({status: 200})
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.generateToken(req.user);
  }

  @ApiOperation({summary: 'Регистрация пользователя'})
  @ApiResponse({status: 200})
  @UsePipes(ValidationException)
  @Post('/registration')
  registration(@Body() userDto: CreateUserDto): Promise<{ access_token: string }> {
    return this.authService.registration(userDto);
  }

  // @ApiOperation({summary: 'Получение профиля'}) // TODO для тестов
  // @ApiResponse({status: 200})
  // @UseGuards(JwtAuthGuard)
  // @Get('/profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}