import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";


export class UpdateClaseDto {
    @ApiProperty({ example: 'id' })
    @IsNotEmpty({ message: 'Please Enter idclase' })
    @IsInt({ message: 'Please Enter Valid id' })
    id_clase: number;

    @ApiProperty({ example: 'idU' })
    @IsNotEmpty({ message: 'Please Enter idU' })
    @IsInt({ message: 'Please Enter Valid idU' })
    id_user: number;

    @ApiProperty({ example: 'estado' })
    @IsNotEmpty({ message: 'Please Enter estado' })
    @IsString({ message: 'Please Enter Valid estado' })
    estado: string;
}
