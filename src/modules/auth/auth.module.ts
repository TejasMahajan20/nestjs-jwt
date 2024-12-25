import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity
    ]),
    JwtModule.registerAsync({
      global: true
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
