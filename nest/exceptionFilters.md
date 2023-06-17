# 📔 Exception Filters

# 1 - Tushunchalar

NestJS-dagi "Exception Filters" xususiyatlari, sizning ilovangizda kelib chiqadigan xatoliklarni boshqarishda yordam beradi. Ular, sizning serveringizning qanday xatolik javoblarini qaytarishini boshqarishingizga imkon beradi.

Exception filterlar asosan ikkita komponentdan iborat: decorator va class.

Decorator sizning controller metodlariga yoki butun controllerga ilova qilinadi. Uning vazifasi shundaki, agar ushbu metod yoki controllerda xatolik bo'lsa, kerakli filter classni chaqirish.

Class esa xatolikni qanday qilib qaytarishni aniqlaydi. U filterni yozish uchun, `@Catch()` decoratorini va `ExceptionFilter` interfeysini ishlatishingiz kerak.

Quyidagi misolni ko'rib chiqing:

```tsx
import { Catch, ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}

```

Bu filter `HttpException` turlarini tutib oladi va ularni JSON formatidagi xatolik javobiga aylantiradi. Bu javobda xatolik kod, vaqt belgisi va so'rovning URL manzili bor.

Filterni ilovalash uchun, metod yoki controllerga `@UseFilters()` decoratorini qo'shing:

```tsx
import { UseFilters } from '@nestjs/common';

@UseFilters(new HttpExceptionFilter())
export class SomeController {
  // ...
}

```

Bu holatda, `SomeController` controlleridagi hamma metodlar `HttpExceptionFilter` filterdan o'tadi.

Bundan tashqari, siz global exception filterlarni ham qo'shishingiz mumkin, bu esa barcha controllerlarni qamrab oladi.

```tsx
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();

```

Bu usulda, sizning barcha controllerlaringiz `HttpExceptionFilter` orqali xatoliklarni qaytaradi.

# 2 - Tushunchalar

Exception Filtersni qo'llashning yana bir yo'li ham bor. Bu, har bir controller metodiga mos exception filterni biriktirish.

Quyidagi misolni ko'rib chiqing:

```tsx
import { Controller, Get, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';

@Controller('books')
export class BooksController {
  @Get()
  @UseFilters(HttpExceptionFilter)
  findAll() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}

```

Bu yerda, `findAll()` metodida xatolik yuz berishi holida, `HttpExceptionFilter` ishga tushadi.

Agar sizning ilovangizda bir nechta turdagi xatoliklar ro'yxatdan o'tishi mumkin bo'lsa, siz `@Catch()` decoratoriga bir nechta xatolik turlarini uzatishingiz mumkin. Misol uchun:

```tsx
import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class DatabaseExceptionFilter extends BaseExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    super.catch(new InternalServerErrorException('Database Error'), host);
  }
}

```

Bu yerda, `DatabaseExceptionFilter` `QueryFailedError` turdagi xatoliklarni tutib oladi. Bu xatoliklar, TypeORM bilan ishlash paytida ro'yxatdan o'tishi mumkin bo'lgan xatoliklar.

Bu filter sizning ilovangizning ma'lumotlar bazasiga oid xatoliklarni yo'qotib, foydalanuvchiga tushunarliroq xabar beradi. Bu xatoliklar odatda ma'lumotlar bazasining ichki xatoliklari bo'lib, ularga oid xabarlar foydalanuvchilar uchun tushunarli bo'lmaydi. Shuning uchun, bu yerda biz ularga "Database Error" degan umumiy xabar beramiz.

Bu filterni ilovalash uchun, yuqoridagi misoldagi kabi `@UseFilters()` decoratoridan foydalanishingiz mumkin. Yoki global exception filter sifatida ilovalashingiz mumkin:

```
async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalFilters(new DatabaseExceptionFilter());
  await app.listen(3000);
}
bootstrap();

```

Bu usulda, sizning barcha controllerlaringiz `DatabaseExceptionFilter` orqali xatoliklarni qaytaradi. Bu, sizning ilovangizning ma'lumotlar bazasiga oid xatoliklarni yaxshi boshqarishingizga yordam beradi.

# 3 - Hayotiy misol

Exception Filters yordamida siz ilovangizda ro'yxatdan o'tadigan xatoliklarni boshqarishingiz mumkin. Aytaylik, sizning ilovangizda bir nechta xatolik turlari mavjud: HTTP xatoliklar (masalan, 404 Not Found, 403 Forbidden), ma'lumotlar bazasining xatoliklari, va sizning ilovangizning ichki xatoliklari.

Bu xatoliklarni boshqarish uchun siz quyidagi exception filterlarni yozishingiz mumkin:

1. `HttpExceptionFilter`: bu filter HTTP xatoliklarini qaytaradi.
2. `DatabaseExceptionFilter`: bu filter ma'lumotlar bazasining xatoliklarini qaytaradi.
3. `AppExceptionFilter`: bu filter sizning ilovangizning ichki xatoliklarini qaytaradi.

```tsx
import { Catch, ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.message,
      });
  }
}

@Catch(DatabaseException)
export class DatabaseExceptionFilter implements ExceptionFilter {
  catch(exception: DatabaseException, host: ArgumentsHost) {
    // Database exceptions handling logic here
  }
}

@Catch(AppException)
export class AppExceptionFilter implements ExceptionFilter {
  catch(exception: AppException, host: ArgumentsHost) {
    // App exceptions handling logic here
  }
}

```

Endi siz ushbu filterlarni ilovalashingiz kerak. Masalan, siz `BooksController` controllerida `getAllBooks()` metodini yozmoqchisiz. Bu metod barcha kitoblarni qaytarishi kerak, lekin agar ma'lumotlar bazasida xatolik bo'lsa, `DatabaseExceptionFilter` ishga tushishi kerak.

```tsx
import { Controller, Get, UseFilters } from '@nestjs/common';
import { BooksService } from './books.service';
import { DatabaseExceptionFilter } from './database-exception.filter';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  @UseFilters(DatabaseExceptionFilter)
  getAllBooks() {
    return this.booksService.getAllBooks();
  }
}

```

Bu yerda, `getAllBooks()` metodida `DatabaseExceptionFilter` ishlatiladi. Bu metod ma'lumotlar bazasida xatolik yuz berishi holida, `DatabaseExceptionFilter` ishga tushadi va xatolik javobini qaytaradi.

Bu misol yordamida siz NestJS-dagi Exception Filters xususiyatini qanday qo'llash kerakligini ko'rgan bo'lsangiz. Exception Filters sizning ilovangizda yuz beradigan xatoliklarni boshqarishda juda yordam beradi.