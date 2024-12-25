import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.registerAsync({
      global: true
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
