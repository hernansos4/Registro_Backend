import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'username123' })
  @IsNotEmpty({ message: 'Please Enter Username' })
  @IsString({ message: 'Please Enter Valid Username' })
  username: string;

  @ApiProperty({ example: 'password123' })
  @IsNotEmpty({ message: 'Please Enter Password' })
  @IsString({ message: 'Please Enter Valid Password' })
  password: string;
}