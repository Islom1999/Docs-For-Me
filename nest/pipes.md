# Pipes

NestJS dasturlash tilida "Pipes" haqida tushuntirishdan oldin, Pipes nima ekanligini tushunish kerak.

Pipes, NestJS frameworkda argumentlarni ma'lum bir formatga o'tkazish, yoki ularga yondashuv qilish uchun ishlatiladigan xususiyatlar. Pipeslar ikki turdagi vazifalarni bajarishi mumkin: transformatsiya va validatsiya.

1. **Transformatsiya:** Bu, kiritilgan argumentlarni ma'lum formatga o'tkazishni o'z ichiga oladi. Misol uchun, agar siz string formatidagi sonni o'qib olishni xohlashingiz, siz Pipe ni ishlatishingiz mumkin.
2. **Validatsiya:** Bu, kiritilgan argumentlarning to'g'ri formatda yoki qiymatda bo'lishini tekshirishni o'z ichiga oladi. Agar argument noto'g'ri bo'lsa, Pipe avtomatik ravishda xatolik yuboradi.

Endi, Pipesni qanday ishlatish kerakligi haqida misollar bilan gaplashamiz.

**Birinchi misol: Built-in `ParseIntPipe`**

NestJS-da `ParseIntPipe` degan built-in Pipe bor, u string formatidagi sonni integer formatiga o'tkazadi. Bu Pipe'ni route handler'da ishlatish mumkin.

```tsx
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    // id argumenti endi number turi, biz shu yerda biznes logikani amalga oshiramiz
    return `User #${id}`;
  }
}

```

Bu kodda, `:id` parametri `ParseIntPipe` orqali o'tkaziladi, shuning uchun `id` parametri number formatida bo'ladi. Agar client string formatidagi son emas, balki noto'g'ri qiymat yuborsa, NestJS avtomatik ravishda xatolik yuboradi.

**Ikkinchi misol: Custom Pipe yaratish**

Agar siz o'zingizning custom Pipe'ingizni yaratmoqchi bo'lsangiz, quyidagicha amalga oshirishingiz mumkin:

```tsx
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidateInputPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException('Value is required');
    }
    // qo'shimcha validatsiya logikasi
    return value;
  }
}

```

Bu `ValidateInputPipe` nomli custom Pipe buni ishlatish uchun:

```tsx
import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ValidateInputPipe } from './validate-input.pipe';

@Controller('users')
export class UsersController {
  @Get()
  async findAll(@Query('name', new ValidateInputPipe()) name: string) {
    // name parametri endi tekshirilgan
	}
```

**Uchinchi misol: Class-validator va Class-transformer bilan ishlovchi Pipe**

`class-validator` va `class-transformer` kabi kutubxonalar yordamida, siz parametrlar va DTO'larni (Data Transfer Objects) yaxshi validatsiya va transformatsiya qilishingiz mumkin. Bu ikkala kutubxona birga ishlatilganda, siz `@Body()`, `@Query()`, va `@Param()` decoratorlari uchun yordamchi `ValidationPipe` dan foydalanishingiz mumkin.

Avvalo, `class-validator` kutubxonasini o'rnatamiz:

```tsx
npm install class-validator class-transformer

```

Keyin, DTO classini yaratamiz va u uchun validatsiya decoratorlarini qo'shamiz:

```tsx
import { IsNotEmpty, IsInt, IsPositive } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsPositive()
  age: number;
}

```

Shu paytda, `ValidationPipe` ni ishlatib, `@Body()` decorator orqali keladigan ma'lumotlarni validatsiya qilishimiz mumkin:

```tsx
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  async create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    // Ma'lumotlar endi validatsiya qilingan va CreateUserDto formatiga o'tkazilgan
    // Shu yerda biznes logikani amalga oshirishimiz mumkin
  }
}

```

Bu yerda, `ValidationPipe` `@Body()` decorator orqali kelgan ma'lumotlarni avtomatik tarzda `CreateUserDto` ga o'tkazadi va har bir maydon uchun validatsiya qiladi. Agar ma'lumotlar noto'g'ri bo'lsa, avtomatik ravishda xatolik yuboradi.

Ushbu misollar orqali, NestJS da Pipesning asosiy vazifalarini va ularni qanday qilib ishlatish kerakligini ko'rdik. Boshqa savollaringiz bo'lsa, iltimos so'rang.