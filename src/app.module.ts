import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ClasesModule } from './modules/clases/clases.module';
import { DatabaseModule } from './modules/database/database.module';
import { JwtAuthModule } from './modules/jwt-auth/jwt-auth.module';

@Module({
  imports: [UsuariosModule, ClasesModule, JwtAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
