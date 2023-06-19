# 📔 Cookie

NestJS, cookie'larga ma'lumot saqlash uchun tayyorlangan modullarni o'rnatish orqali osonlik bilan ishlayadi. "cookie-parser" moduli yordamida NestJS loyihangizda cookie'larga ma'lumot saqlash imkoniyatini yaratishingiz mumkin. Quyidagi qadamlar orqali NestJS'da cookie'larga ma'lumot saqlashingiz mumkin:

1. "cookie-parser" modulini o'rnatish:

```bash
npm install cookie-parser
```

2. NestJS aplikatsiyangizdagi `main.ts` faylida `cookieParser()` middleware-ni qo'shing:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  await app.listen(3000);
}
bootstrap();
```

3. Endpoints (nuqtalar) yaratishda cookie'larga ma'lumot yozing va o'qishing. Misol uchun, cookie'ga ma'lumot yozish uchun endpoint yarating:

```typescript
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('example')
export class ExampleController {
  @Get('set-cookie')
  setCookie(@Res() response: Response) {
    response.cookie('exampleCookie', 'Hello, Cookie!', { maxAge: 3600000 }); // Cookie yozish
    return 'Cookie set!';
  }

  @Get('get-cookie')
  getCookie(@Req() request: Request) {
    const exampleCookie = request.cookies['exampleCookie']; // Cookie'dan ma'lumot olish
    return exampleCookie;
  }
}
```

Yaratilgan `set-cookie` va `get-cookie` nuqtalariga HTTP so'rovlari orqali murojaat qilishingiz mumkin. `set-cookie` nuqtasi "exampleCookie" nomli cookie'ga "Hello, Cookie!" deb nomlangan ma'lumot yozadi va `get-cookie` nuqtasida ushbu cookie'dan ma'lumotni olish mumkin.

Shunday qilib, yaratilgan cookie'larga ma'lumot yozish va ulardan foydalanish imkoniyati mavjud bo'ladi. Buni boshqarish uchun "cookie-parser" modulini NestJS'da ishlatishingiz mumkin.

