Ajoyib! To'liq JWT autentifikatsiya tizimini NestJS-da login va register endpoints'lariga qo'shib beramiz. 

1. Avval, `auth` katalogida `auth.controller.ts` faylini oching yoki yaratib uni quyidagi kod bilan to'ldiring:

```typescript
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const user = await this.authService.register(registerDto);
    return { message: 'Muvaffaqiyatli ro\'yxatdan o\'tdingiz', user };
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.login(loginDto);
    if (!user) {
      return { message: 'Foydalanuvchi topilmadi' };
    }
    const token = await this.authService.generateToken(user);
    return { token };
  }

  @Post('protected')
  @UseGuards(AuthGuard('jwt'))
  async protectedRoute() {
    return { message: 'Siz autentifikatsiyadan o\'tdingiz' };
  }
}
```

2. Keyingi qadamda, `auth` katalogida `dto` nomli yangi papka yaratamiz va ichiga `register.dto.ts` va `login.dto.ts` fayllarini quyidagi kod bilan yaratamiz:

`register.dto.ts`:

```typescript
import { IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;
}
```

`login.dto.ts`:

```typescript
import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
```

3. So'ng `auth` katalogida `auth.service.ts` faylini yarating yoki oching va quyidagi kodni kiriting:

```typescript
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  // Ma'lumotlarni saqlash uchun kerakli logikani qo'shing
  private users = [
    { id: 1, username: 'foydalanuvchi1', password: 'parol1' },
    { id: 2, username: 'foydalanuvchi2', password: 'parol2' },
  ];

  constructor(private jwtService: JwtService) {}

  async register(registerDto: RegisterDto): Promise<any> {
    const newUser = {
      id: this.users.length + 1,
      username: registerDto.username,
      password: registerDto.password,
    };
    this.users.push(newUser);
    return newUser;
  }

  async login(loginDto: LoginDto): Promise<any> {
    const user = this.users.find(
      (u) => u.username

 === loginDto.username && u.password === loginDto.password,
    );
    return user;
  }

  async generateToken(user: any): Promise<string> {
    return this.jwtService.sign({ id: user.id, username: user.username });
  }

  async validateUser(payload: any): Promise<any> {
    const user = this.users.find((u) => u.id === payload.id);
    return user;
  }
}
```

Sizning ma'lumotlarni saqlash lozimligi bo'yicha `users` o'zgaruvchisini o'zingizning ma'lumotlaringiz bilan almashtiring.

4. Endi esa `auth` katalogida `auth.module.ts` faylini yarating yoki oching va quyidagi kodni kiriting:

```typescript
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'sizning-maxfiy-kalitingiz', // JWT ni imzolash uchun o'z maxfiy kalitingizni kiriting
      signOptions: { expiresIn: '1d' }, // JWT amal qilish muddati
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
```

5. Keyin, `app.module.ts` faylida avvalgi o'zgarishlarni qo'shing:

```typescript
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
})
export class AppModule {}
```

Ushbu o'zgarishlardan so'ng, `POST /auth/register` endpoint'ida foydalanuvchi ro'yxatdan o'tkaziladi va `POST /auth/login` endpoint'ida foydalanuvchi kiritish ma'lumotlari tekshiriladi. Agar foydalanuvchi mavjud bo'lsa, avtorizatsiya tokeni generatsiyalanadi va uni qaytaradi.

Ushbu koddan foydalanuvchi autentifikatsiyasining asosiy qismlarini oling va o'z maqsadingizga moslashtiring. Mavjud foydalanuvchilar ro'yxatidan o'tkazish, login qilish va avtorizatsiya tokenini tekshirishga qo'shimcha logikalar qo'shishingiz mumkin.


## ikkinchi

Afsuski, avvalgi javobimda `JwtStrategy` klasiga oid kodlarni ko'rsatmayman. Quyidagi kodni `jwt.strategy.ts` nomli faylda yaratib uni `auth` katalogida saqlang:

```typescript
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'sizning-maxfiy-kalitingiz', // JWT ni imzolash uchun o'z maxfiy kalitingizni kiriting
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
```

Bu kodlarda `JwtStrategy` Passport strategiyasini miras oladi va `Strategy`dan yaratiladi. `JwtStrategy` konstruktorida, `jwtFromRequest` xususiyati orqali JWT ni olish va `secretOrKey` xususiyati orqali imzolash uchun maxfiy kalit beriladi.

`validate` metodi foydalanuvchi ma'lumotlarini tekshiradi va ma'lumotlar to'g'ri bo'lsa foydalanuvchini tasdiqlayadi. Agar foydalanuvchi topilmagan bo'lsa, `UnauthorizedException` istisnosini qaytaradi.

`JwtPayload` interface'i esa foydalanuvchi identifikatsiyasi uchun JWT da saqlanadigan ma'lumotlarini ifodalaydi. O'zingizning lozimli ma'lumotlaringizga mos keladi bo'lsa, uni o'zgartiring.

Endi esa `AuthModule` dagi providers ro'yxatiga `JwtStrategy` ni ham qo'shib qo'yishimiz kerak:

```typescript
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'sizning-maxfiy-kalitingiz', // JWT ni imzolash uchun o'z maxfiy kalitingizni kiriting
      signOptions: { expiresIn: '1d' }, // JWT amal qilish muddati
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
```

Bu koddan so'ng, JWT autentifikatsiyasi to'liq tuzilgan bo'ladi va `JwtStrategy` autentifikatsiya jarayonini boshqarish uchun ishlatiladi. Siz o'zingizning autentifikatsiya logikangizga mos keladigan strategiyani yaratib

## xato

Afsuski, mening avvalgi javobimda `JwtPayload` interface'idan bahramandlikni to'liq tushunmadim. `JwtPayload` interface'i, JWT da saqlanadigan ma'lumotlarni ifodalaydi. Misol uchun, foydalanuvchi identifikatsiyasi uchun `id` va `username` ma'lumotlari o'z ichiga olishi mumkin.

Quyidagi kod bilan `jwt-payload.interface.ts` faylini `interfaces` katalogida yaratib uni import qiling:

```typescript
export interface JwtPayload {
  id: number;
  username: string;
}
```

`JwtPayload` interface'i sizning lozimli ma'lumotlaringizga mos keladi. Agar yana boshqa ma'lumotlarni ham JWT da saqlashni istasangiz, unga qo'shimcha xususiyatlar ham qo'shishingiz mumkin.

`JwtPayload` interface'idan foydalanishni unutmang va `jwt.strategy.ts` faylidagi `validate` metodi ichida foydalanuvchi ma'lumotlarini tekshirish uchun uni ishlatishingiz kerak:

```typescript
async validate(payload: JwtPayload) {
  const user = await this.authService.validateUser(payload.id);
  if (!user) {
    throw new UnauthorizedException();
  }
  return user;
}
```

Endi `JwtStrategy` va `JwtPayload` interface'ini to'g'ri ishlatishingiz mumkin. Iltimos, o'zgarishlarni amalga oshiring va tekshirishni unutmang.