# 📔 Session

NestJS, Node.js uchun TypeScript asosida ishlaydigan bir web ilovalarining server-bazalari kerakli ko'plab imkoniyatlarni beradi. Sessiyalarga malumot saqlash uchun NestJS, sessiya boshqaruvi va ma'lumotlar saqlash uchun middleware yordamida xizmat qiladi.

Sessiyalarni saqlash uchun avvalo "express-session" yoki o'zgartirilgan variantisini o'rnatishingiz kerak. Ushbu modul Node.js'ning Express frameworki uchun sessiyalarni boshqarish imkonini beradi. NestJS esa Express'ni asosiy ko'rishdagi avtobus uchun framework sifatida ishlatadi. Shuning uchun, "express-session" modulini NestJS loyihangizga o'rnatishingiz mumkin.

Quyidagi qadamlar orqali NestJS'da sessiyalarga malumotni saqlashingiz mumkin:

1. Sessiyalarni boshqarish uchun "express-session" modulini o'rnatish:

```bash
npm install express-session
```

2. NestJS aplikatsiyangizdagi `main.ts` faylida `app.use()` bilan sessiya middleware-ni qo'shing:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'your-secret-key', // Muayyan bir kalit so'z
      resave: false,
      saveUninitialized: false,
    }),
  );

  await app.listen(3000);
}
bootstrap();
```

3. Endpoints (nuqtalar) yaratishda sessiya ma'lumotlariga murojaat qiling. Misol uchun, sessiyalarga malumot qo'shish uchun endpoint yarating:

```typescript
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('example')
export class ExampleController {
  @Get('add-session')
  addSession(@Req() request: Request) {
    request.session.data = 'Hello, Session!'; // Sessiyaga ma'lumot yozish
    return 'Session data added!';
  }

  @Get('get-session')
  getSession(@Req() request: Request) {
    const sessionData = request.session.data; // Sessiyadan ma'lumot olish
    return sessionData;
  }
}
```

Yaratilgan `add-session` va `get-session` nuqtalariga HTTP so'rovlari orqali murojaat qilishingiz mumkin. `add-session` nuqtasi sessiyaga "Hello, Session!" deb nomlangan ma'lumot yozadi va `get-session` nuqtasida sessiyadan ushbu ma'lumotni olish mumkin.

Shunday qilib, yaratilgan sessiyalardagi ma'lumotlarni saqlash va ulardan foydalanish imkoniyati mavjud bo'ladi. Buni boshqarish uchun "express-session" modulini NestJS'd