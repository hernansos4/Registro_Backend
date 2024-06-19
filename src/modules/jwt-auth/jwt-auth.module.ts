import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/config/jwtConstants';
import { JwtStrategy } from './strategy/jwt.strategy';


@Module({
    imports: [
        ConfigModule.forRoot(),
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1d' }
        })
    ],
    providers: [JwtModule, JwtStrategy]

})
export class JwtAuthModule {

}
