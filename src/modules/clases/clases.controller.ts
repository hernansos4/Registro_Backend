import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ClasesService } from './clases.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RegisterClaseDto } from './dto/register.dto';
import { get } from 'http';
import { JwtAuthGuard } from '../jwt-auth/guard/jwt.auth.guard';
import { UpdateClaseDto } from './dto/update-clase.dto';

@ApiTags('clases')
@Controller('clases')
export class ClasesController {
  constructor(private readonly clasesService: ClasesService) { }

  @Get('allCarreras')
  findCarrera() {
    return this.clasesService.findCarrera()
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('allClases')
  findAll() {
    return this.clasesService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('register')
  register(@Body() body: RegisterClaseDto) {
    return this.clasesService.register(body)
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('setEstado')
  setestado(@Body() body: UpdateClaseDto) {
    return this.clasesService.setEstado(body);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('findOrganigrama')
  findOrganigrama() {
    return this.clasesService.findOrganigrama()
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('findCarreraUser')
  findCarreraUser() {
    return this.clasesService.findCarreraUser()
  }


}
