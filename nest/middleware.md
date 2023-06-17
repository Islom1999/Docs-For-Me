# 📔 Middleware

# 1-Tushunchalar

NestJS'da Middleware, uchun bir turi bo'lgan ad-hoc modullardir, u ularni boshqarishga yordam beradigan bir qancha yo'nalishlari bor. Ular sizning ilovalaringizda kerakli bo'lgan aralash joylarda o'tishni boshqarishga yordam beradi.

Middleware'ni, route handler'lar ishga tushishdan oldin bajariladigan funksiyalar sifatida o'ylang. Ular so'rov va javob ob'ektlariga kirishga ruxsat beradi, shuningdek, so'rov jarayonini keyingi Middleware funksiyasiga o'tkazish uchun `next()` funksiyasini chaqiradi.

Quyidagi kod bir misol bo'la oladi:

```tsx
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...', req.method, req.originalUrl);
    next();
  }
}

```

Bu `LoggerMiddleware` har bir so'rovni konsolga chiqaradi. Endi bu Middleware'ni ilovamizga ulashishimiz kerak. Buni ikkita usul bilan qilishimiz mumkin: funksional yoki modul usul.

### Funktsional usul:

Funksional usulda, Middleware'ni ilovaning bosh module'siga qo'shishimiz kerak. Bu `app.module.ts` faylida amalga oshiriladi:

```tsx
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';

@Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}

```

Bu yerda `forRoutes('*')` barcha yo'nalishlar uchun `LoggerMiddleware`'ni qo'llashni anglatadi.

### Modul usul:

Modul usulda, `configure()` metodini yaratish orqali modul ichida Middleware'ni ulashimiz mumkin:

```tsx
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}

```

Bu yerda `forRoutes('cats')` faqat `/cats` yo'nalishi uchun `LoggerMiddleware`'ni qo'llashni anglatadi. Bu yo'nalishlar to'plamiga o'tishdan oldin `LoggerMiddleware` bajariladi.

Bu usullar sizning ilovangizda Middleware'ni qanday qo'llashni istaganingizga qarab turadi. Ikkalasi ham o'ziga xos qulayliklariga ega.

# Hayotiy misol

Tabiiyki, aytaylik bizning ilovamizda foydalanuvchilarning autentifikatsiyasini tekshirish uchun middleware yaratishga harakat qilib ko'ramiz. Ushbu misolimizda, biz express.js-dan `Request`, `Response`, `NextFunction` ob'ektlarini import qilamiz va `CheckAuthMiddleware` deb nomlangan middleware yaratamiz.

```tsx
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CheckAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      return res.status(403).json({ error: 'No credentials sent!' });
    }
    // real-life scenario'da siz shu yerda token'ni tekshirib ko'rasiz
    next();
  }
}

```

Ushbu middleware har bir so'rovni tekshiradi va agar `authorization` sarlavhasi mavjud bo'lmasa, 403 (forbidden) status kodini qaytaradi.

Endi, bu middleware'ni bir modulga joylashtiraylik. Misol uchun, `UsersModule` deb nomlangan bir modulga joylashtirishni ko'ramiz:

```tsx
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CheckAuthMiddleware } from './check-auth.middleware';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckAuthMiddleware)
      .forRoutes('users');
  }
}

```

Bu kod `CheckAuthMiddleware`'ni `UsersModule`'ning barcha yo'nalishlariga qo'shadi. Bu shuni anglatadi ki, `users` yo'nalishida har qanday so'rov `CheckAuthMiddleware`dan o'tadi, bu esa so'rovda `authorization` sarlavhasi mavjudligini tekshiradi.

Bu o'rnakda, real-life scenario'da siz `authorization` sarlavhasidagi token'ni tekshirib, foydalanuvchining tizimga kirish huquqiga ega bo'lganligini tekshirishingiz kerak bo'lar edi. Biroq, bu o'rnak sizga NestJS middleware'ning qanday ishlashini tushuntirish uchun mo'ljallangan.