import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterClaseDto {
  @ApiProperty({ example: 'clase1' })
  @IsNotEmpty({ message: 'Please Enter ClassName' })
  @IsString({ message: 'Please Enter Valid ClassName' })
  nombre: string;

  @ApiProperty({ example: 4 })
  @IsNotEmpty({ message: 'Please Enter Unidades valorativas' })
  @IsString({ message: 'Please Enter Valid Unidades valorativas' })
  unidades_valorativas: number;

  @ApiProperty({ example: 'parent?' })
  @IsNotEmpty({ message: 'Please Enter parentClass' })
  @IsInt({ message: 'Please Enter Valid parentClass' })
  parent: number;

  @ApiProperty({ example: 'carrera' })
  @IsNotEmpty({ message: 'Please Enter carrera' })
  @IsInt({ message: 'Please Enter Valid carrera' })
  id_carrera: number;
}