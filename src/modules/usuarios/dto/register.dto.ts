import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'username123' })
  @IsNotEmpty({ message: 'Please Enter Username' })
  @IsString({ message: 'Please Enter Valid Username' })
  username: string;

  @ApiProperty({ example: 'password123' })
  @IsNotEmpty({ message: 'Please Enter Password' })
  @IsString({ message: 'Please Enter Valid Password' })
  password: string;

  @ApiProperty({ example: 'carrera' })
  @IsNotEmpty({ message: 'Please Enter carrera' })
  @IsInt({ message: 'Please Enter Valid carrera' })
  id_carrera: number;
}

