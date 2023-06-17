
# Swagger ulash

Swagger UI-ni Nest.js proyektingizda ulab ishlatish uchun quyidagi qadam-larni bajaring:

1. `@nestjs/swagger` va `swagger-ui-express` kutubxonalarni o'rnatish: Terminalda Nest.js-proyekt katalogida quyidagi buyruqlarni bajarib, kutubxonalarni o'rnatishni boshlang:

   ```bash
   npm install --save @nestjs/swagger swagger-ui-express
   ```

2. `SwaggerModule`ni sozlash: `main.ts` faylda `SwaggerModule` ni qo'shing:

   ```typescript
   import { NestFactory } from '@nestjs/core';
   import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
   import { AppModule } from './app.module';

   async function bootstrap() {
     const app = await NestFactory.create(AppModule);

     const config = new DocumentBuilder()
       .setTitle('API Documentation')
       .setDescription('API documentation for your Nest.js application')
       .setVersion('1.0')
       .build();

     const document = SwaggerModule.createDocument(app, config);
     SwaggerModule.setup('api', app, document);

     await app.listen(3000);
   }
   bootstrap();
   ```

   Bu kodda, `DocumentBuilder` obyektini yaratib, Swagger-ni konfiguratsiyalaymiz. Siz `setTitle`, `setDescription` va `setVersion` metodlar orqali ma'lumotlarni sozlay olasiz.

   `SwaggerModule.createDocument` metodi `app` va `config` obyektlarini o'z ichiga oladi va Swagger YAML ma'lumotlarini generatsiya qiladi.

   `SwaggerModule.setup` metodi Swagger UI-ni qo'llab-quvvatlaydigan konfiguratsiyani amalga oshiradi. Birinchi argument `api` manzilini taqdim etadi, API dokumentatsiyasiga qanday kirish mumkinligini bildiradi.

3. Kode qo'shimcha javoblar kiritish: Endpointlaringizda Swagger-dan qo'shimcha ma'lumotlar kiritish uchun Nest.js-decorators laridan foydalanishingiz mumkin. Masalan, `@ApiTags`, `@ApiOperation`, `@ApiParam`, `@ApiResponse` kabi dekoratorlarni `@Controller` va `@Api` dekoratorlarni qo'shib qo'ying:

   ```typescript
   import { Controller, Get, Param } from '@nestjs/common';
   import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

   @ApiTags('users')
   @Controller('users')
   export class UsersController {
     @ApiOperation({ summary: 'Get user by ID' })
     @ApiParam({ name: 'id', description: 'User ID' })
     @ApiResponse({ status: 200, description: 'User found' })
     @ApiResponse({ status: 404, description: 'User not found' })
     @Get(':id')
     getUserById(@Param('id') id: string) {
       // Ma'lumotlarni qaytarish
     }
   }
   ```

   Bu misolda `@ApiTags` dekoratori `users` tegini belgilaydi, `@ApiOperation` dekoratori `Get user by ID` deb belgilangan am

alni ta'rifi bilan birlikda foydalaniladi. `@ApiParam` dekoratori `id` nomli parameterga izoh beradi, `@ApiResponse` dekoratori esa 200 va 404 HTTP kodlari bilan javob berishni belgilaydi.

4. Serverni ishga tushirish: Terminalda proyektni katalogida quyidagi buyruqlarni bajarib, serverni ishga tushiring:

   ```bash
   npm run start
   ```

5. Swagger UI-ni kuzatish: Brauzeringizda `http://localhost:3000/api` manzilini oching (yoki `http://localhost:3000/api-json` manzilini o'zingiz tanlangan ma'lumot turlarini ko'rish uchun). Bu manzilda Swagger UI sahifasi ko'rinadi va API-ni sinab ko'rish uchun interfeysni taklif qiladi.

Ushbu jarayonlar natijasida siz Nest.js-proyektingizda Swagger UI-ni muvaffaqiyatli ulab ishlatgan bo'lasiz. Swagger UI-ni foydalanish orqali API-ni dokumentatsiyasini va sinov interfeysini qulaylik bilan ko'rish imkoniyatiga ega bo'lasiz. Qo'shimcha ma'lumotlarni dekoratorlar yordamida belgilash, API-ni tavsiflash va sinov qilishni osonlashtiradi.