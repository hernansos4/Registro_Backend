import { PassportStrategy } from "@nestjs/passport";
import { BadRequestException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "src/config/jwtConstants";


export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private jwtService: JwtService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // extrae el token de la cabecera
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: { iat: number; exp: number }) {
        const currentTime = Math.floor(Date.now() / 1000);


        if (payload.iat > currentTime) {
            throw new BadRequestException(
                'Invalid token. Token issued in the future.',
            );
        }

        if (payload.exp < currentTime) {
            throw new UnauthorizedException('Token has expired.');
        }

        return payload;
    }
}