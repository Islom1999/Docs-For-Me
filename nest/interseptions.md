# Interceptors

# 1 - Tushunchalr

NestJS-dagi "Interceptors" haqida gaplashayotganimizda, u umumiy ravishda API-lar uchun foydalanish uchun qanday qilib o'zgartirishlar yaratish yoki ma'lumotlarni tahlil qilish uchun ishlatilishini aytib o'tamiz.

Interceptor-lar asosan 2 ta vazifani bajara oladi:

1. Request va Response o'rtasidagi data flow-ni o'zgartirish
2. Request va Response jarayonini monitoring qilish yoki loglash

Interceptor-lar `@Injectable()` decorator bilan belgilangan class-lar bo'lib, ular `NestInterceptor` interface-dan meros oladilar.

Quyidagi misolga e'tibor bering:

```tsx
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(map(data => ({ data })));
  }
}

```

Bu interceptor barcha route-lar uchun qaytarilayotgan ma'lumotlarni `{ data: ... }` formatiga o'zgartiradi. Bu yerda `context` o'zgaruvchisi so'rov haqida ma'lumotlarni beradi, `next` esa controller-dagi metodga kirish uchun ishlatiladi.

Bu interceptor-ni biror route-da ishlatish uchun, uni controller-ga yoki method-ga `@UseInterceptors()` decorator orqali ulashingiz kerak:

```tsx
import { Controller, UseInterceptors } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';

@Controller('example')
@UseInterceptors(TransformInterceptor)
export class ExampleController {
  // ...
}

```

Bu usul bilan, `ExampleController`-dagi barcha metodlar `TransformInterceptor`-ni ishlatadi. Agar siz interceptor-ni faqat biror bir metod uchun ishlatmoqchi bo'lsangiz, uni shu metodga decorator sifatida qo'shing:

```tsx
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';

@Controller('example')
export class ExampleController {
  @Get()
  @UseInterceptors(TransformInterceptor)
  findOne() {
    // ...
  }
}

```

Bu misolda, `TransformInterceptor` faqat `findOne()` metodida ishlaydi.

# 1-Vazifasiga hayotiy misol

Interceptorning birinchi vazifasi request va response o'rtasidagi data flow-ni o'zgartirishdir. Bu misolda biz `WrapResponseInterceptor` nomli interceptor yaratamiz, bu interceptor javobni boshqa ma'lumot bilan o'rab, boshqa formatda qaytaradi.

```tsx
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map(data => ({ success: true, data })));
  }
}

```

Bu interceptor har bir response-ni o'rab, yangi formatga keltiradi. Har bir javob `{ success: true, data: ... }` formatida bo'ladi, bu yerda `data` asl javob bo'ladi.

Endi, bu interceptor-ni controller-da ishlataylik:

```tsx
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { WrapResponseInterceptor } from './wrap-response.interceptor';

@Controller('cats')
@UseInterceptors(WrapResponseInterceptor)
export class CatsController {
  @Get()
  findAll() {
    return ['cat1', 'cat2', 'cat3'];
  }
}

```

Bu misolda, `GET /cats` so'rovi kelganda, `findAll` metodi `['cat1', 'cat2', 'cat3']` arrayini qaytaradi, lekin `WrapResponseInterceptor` bu javobni `{ success: true, data: ['cat1', 'cat2', 'cat3'] }` formatiga o'zgartiradi. Bu yerda `data` maydoni asl javobni ifodalaydi.

# 2-Vazifasiga hayotiy misol

Keling, `LoggingInterceptor` nomli interceptor yaratalay. Bu interceptor har bir so'rovning bajarilish vaqti haqida log yozadi.

```tsx
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
      );
  }
}

```

Bu interceptor `Before...` yozuvini chiqaradi, so'rov bajarilishini kutadi, va so'rov bajarilgandan keyin `After...` yozuvini chiqaradi, shuningdek, so'rovning bajarilish vaqti haqida ham ma'lumot beradi.

Endi, bu interceptor-ni biror controller-da ishlataylik:

```tsx
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from './logging.interceptor';

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  @Get()
  findAll() {
    return 'This action returns all cats';
  }
}

```

Bu misolda, `LoggingInterceptor` `CatsController`-dagi barcha so'rovlarga ta'sir qiladi, shu bilan birga, har bir so'rovdan oldin va keyin log yoziladi. Har bir so'rovnoma `GET /cats` so'rovi kelganda, `Before...` va `After...` yozuvlari chiqadi, va so'rov bajarilish vaqti konsolga yoziladi.