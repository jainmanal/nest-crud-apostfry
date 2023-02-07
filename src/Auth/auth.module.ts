import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/User/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtService,
    JwtStrategy
  ],
  exports: [AuthService]
})
export class AuthModule {}
