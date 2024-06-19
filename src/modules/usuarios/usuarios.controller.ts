import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from '../jwt-auth/guard/jwt.auth.guard';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('allUsuarios')
  findAll() {
    return this.usuariosService.findAll();
  }

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.usuariosService.login(body)
  }

  @Post('register')
  register(@Body() body: RegisterDto) {
    return this.usuariosService.register(body)
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('infoUser/:id')
  infoUser(@Param('id') id: string) {
    return this.usuariosService.infoUser(id)
  }

}
