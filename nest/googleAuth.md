# Google auth

## Nest.js-da Google

Nest.js-da Google autentifikatsiyasini o'rnatish uchun quyidagi qadam-lar kerak:

1. Google API-da loyiha ochildi: Avval, sizning proyektingiz uchun Google API-sida yangi loyiha ochildingizga ishonch hosil qiling. Bu, sizga OAuth 2.0 uchun ma'lumotlarni olish imkoniyatini beradi.

2. Nest.js proyekti yaratish: Agar hali boshlanmagan bo'lsa, Nest.js-proyektingizni yarating. Buning uchun `nest new` buyrug'i yoki mavjud proyektni o'zgartiring.

3. `@nestjs/passport` va `passport-google-oauth20` kutubxonalarni o'rnatish: Terminalda proyekt katalogida quyidagi buyruqlarni bajarib, Passport va Google OAuth 2.0 ni yoqish uchun kerakli kutubxonalarni o'rnatishni boshlang:

   ```bash
   npm install --save @nestjs/passport passport-google-oauth20
   ```

4. OAuth konfiguratsiyasini sozlash: Nest.js-proyekt katalogida `src/auth` katalogni yarating. Uning ichida `google.strategy.ts` nomli faylni yaratib quyidagi kodni yozing:

   ```typescript
   import { Injectable } from '@nestjs/common';
   import { PassportStrategy } from '@nestjs/passport';
   import { Strategy } from 'passport-google-oauth20';

   @Injectable()
   export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
     constructor() {
       super({
         clientID: 'Google-API-Client-ID',
         clientSecret: 'Google-API-Client-Secret',
         callbackURL: 'http://localhost:3000/auth/google/callback',
         scope: ['email', 'profile'],
       });
     }

     async validate(accessToken: string, refreshToken: string, profile: any) {
       // Bu funksiya foydalanuvchining profilini tekshiradi va foydalanuvchini bazaga saqlash uchun ma'lumotlarni qaytaradi
       return {
         googleId: profile.id,
         email: profile.emails[0].value,
         name: profile.displayName,
       };
     }
   }
   ```

   `clientID` va `clientSecret` ni Google API-da olingan ma'lumotlar bilan almashtiring. `callbackURL` esa foydalanuvchining autentifikatsiya bo'lganidan keyin yo'naltiriladigan manzilni bildiradi. `scope` esa talab qilingan ma'lumotlarni belgilaydi.

5. `AuthModule` ni sozlash: `src/auth` katalogida `auth.module.ts` nomli faylni yaratib quyidagi kodni yozing:

   ```typescript
   import { Module } from '@nestjs/common';
   import { PassportModule } from '@nestjs/passport';
   import { GoogleStrategy } from './google.strategy';

   @Module({
     imports: [PassportModule],
     providers: [GoogleStrategy],
   })
   export class AuthModule {}
   ```

6. `AppModule` ga `AuthModule` ni qo'shish:

 `src/app.module.ts` faylda `AuthModule` ni `imports` ichiga qo'shing:

   ```typescript
   import { Module } from '@nestjs/common';
   import { AuthModule } from './auth/auth.module';

   @Module({
     imports: [AuthModule],
   })
   export class AppModule {}
   ```

7. Autentifikatsiyani ko'rsatish uchun Endpoint yaratish: Endpointni yaratish uchun `AppController` ga `@UseGuards()` dekoratorini va `@Get()` dekoratorini qo'shing. `src/app.controller.ts` faylda quyidagi kodni yozing:

   ```typescript
   import { Controller, Get, UseGuards, Request } from '@nestjs/common';
   import { AuthGuard } from '@nestjs/passport';

   @Controller()
   export class AppController {
     @Get('auth/google')
     @UseGuards(AuthGuard('google'))
     googleLogin() {}

     @Get('auth/google/callback')
     @UseGuards(AuthGuard('google'))
     googleLoginCallback(@Request() req) {
       return req.user;
     }
   }
   ```

8. Serverni ishga tushirish: Terminalda proyektni katalogida quyidagi buyruqlarni bajarib, serverni ishga tushiring:

   ```bash
   npm run start
   ```

   Server `http://localhost:3000` manzilida ishga tushiriladi.

9. Autentifikatsiya qilish: Avval, brauzeringizda `http://localhost:3000/auth/google` manzilini oching. U sizni Google-login sahifasiga yo'naltiradi. Foydalanuvchi ma'lumotlarini kiriting va Google-hisobingizga kirishni tasdiqlang.

10. Autentifikatsiya natijasini ko'rish: Foydalanuvchi autentifikatsiyadan o'tgandan so'ng, `http://localhost:3000/auth/google/callback` manzilida serverdan foydalanuvchining ma'lumotlari JSON formatida olinadi va brauzerda ko'rsatiladi.

## Google API , `clientID` va `clientSecret`

Google API'dan `clientID` va `clientSecret` olish uchun quyidagi qadam-larni bajaring:

1. Google API Console-ga kirish qiling: Google Cloud Console-ga kirib oling: https://console.cloud.google.com/

2. Yangi loyiha yarating: "Select a project" (Proyektni tanlash) tugmasini bosib yoki "Select a project" (Proyektni tanlash) menyusini ichidagi "New Project" (Yangi loyiha) ni tanlang. Lohiyhani nomlang va "Create" (Yaratish) tugmasini bosing.

3. API-larni yoqish: "APIs & Services" (API-lar va Xizmatlar) menyusidagi "Library" (Kutubxona) ni tanlang. Kerakli API-larni qidiring va ularga kirib "Enable" (Yoqish) tugmasini bosing. Autentifikatsiya uchun "Google Sign-In API" ni va "Google+ API" ni yoqishingiz kerak.

4. Kimliklarni olish: "APIs & Services" (API-lar va Xizmatlar) menyusidagi "Credentials" (Kimliklar) bo'limiga o'ting. "Create Credentials" (Kimliklarni yaratish) tugmasini bosib "OAuth client ID" ni tanlang.

5. Kimlikni sozlash: Kimlik yaratish oynasida quyidagi ma'lumotlarni to'ldiring:

   - "Application type" (Dastur turi)ni "Web application" (Veb dasturi) deb tanlang.
   - "Name" (Nomi)ga loyihaning nomini kiriting.
   - "Authorized JavaScript origins" (Ruxsat etilgan JavaScript manzillari) bo'limida `http://localhost:3000` manzilini qo'shing (manzilni o'zgartirib turishingiz mumkin).
   - "Authorized redirect URIs" (Ruxsat etilgan qayta yo'naltirish manzillari) bo'limida `http://localhost:3000/auth/google/callback` manzilini qo'shing (manzilni o'zgartirib turishingiz mumkin).

6. Kimlik ma'lumotlarini olish: Kimlik yaratilgandan so'ng sizga "Client ID" (Mijoz identifikatori) va "Client Secret" (Mijoz paroli) olinadi. Bu ma'lumotlarni to'play olganingizda, ularni Nest.js-proyektingizdagi `GoogleStrategy`-ning `clientID` va `clientSecret` qismlariga joylashtiring.

Ushbu jarayonlar natijasida siz Google API-dan `clientID` va `clientSecret` ma'lumotlarini olish va Nest.js proyektingizda ularga qo'shish mumkin. Iltimos, ma'lumotlarni to'g'ri kiritish va saqlashni unutmang. Kimliklarni xavfsiz saqlang va joriy qilingan proyektlarga faqatgina etkazib berish uchun ularni foydalaning.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oa6c1tbbskU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>