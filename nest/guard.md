# Guards

NestJS'da "Guards" degan tushuncha ro'yxatdan o'tgan foydalanuvchini tekshirish uchun ishlatiladi. Ular asosan HTTP so'rovi amalga oshirishdan oldin bajariladigan bir qadam sifatida xizmat qiladi. "Guards" bilan ishlashning yaxshi misoli ro'yxatdan o'tgan foydalanuvchini tekshiruvchi guard yaratish bo'lishi mumkin.

Avvalambor, `AuthGuard` classini yaratamiz. Bu yerda "passport" paketi ishlatiladi, bu "passport-jwt" strategiyasi orqali ro'yxatdan o'tgan foydalanuvchini tekshirish uchun ishlatiladi:

```tsx
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends PassportAuthGuard('jwt') {
  handleRequest(err, user, info) {
    // Buni boshqarish uchun qo'shimcha shartlarni qo'shishingiz mumkin
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}

```

Endi, bu guardni kontrollerda ishlatishimiz mumkin. `@UseGuards()` decoratori orqali ishlatish mumkin. Bu decorator kontrollerga yoki kontrollerdagi biror metodga bir nechta guardlarni bir vaqtning o'zida biriktirishga imkon beradi:

```tsx
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller('dashboard')
export class DashboardController {
  @Get()
  @UseGuards(JwtAuthGuard)
  getDashboard() {
    // Ro'yxatdan o'tgan foydalanuvchi uchun ma'lumotlarni qaytarish
  }
}

```

Bu yerda `getDashboard()` metodi faqatgina `JwtAuthGuard` guardi muvaffaqiyatli ishlaganida chaqiriladi. Agar guard muvaffaqiyatsiz ishlasa, `UnauthorizedException` tashlanadi va metod chaqirilmaydi.

Bu misol orqali, siz bir nechta guardlarni yaratib, ulardan birini yoki bir nechtasini har bir kontrollerga yoki metodga biriktirishingiz mumkin.