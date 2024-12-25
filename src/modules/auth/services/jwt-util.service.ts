import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtUtilService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) { }

  async generateAccessToken(payload: any): Promise<string> {
    return await this.jwtService.signAsync(payload, { expiresIn: this.configService.get<string>('JWT_ACCESS_EXPIRATION_TIME') }); // Short-lived
  }

  async generateRefreshToken(payload: any): Promise<string> {
    return await this.jwtService.signAsync(payload, { expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRATION_TIME') }); // Long-lived
  }
}
